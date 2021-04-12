import {CharStreams, CommonTokenStream} from 'antlr4ts';
import {LambdaCalculusLexer} from '../antlr/LambdaCalculusLexer';
import {LambdaCalculusParser} from '../antlr/LambdaCalculusParser';
import {readFile, writeFile} from 'fs/promises';
import {LambdaToAstVisitor} from '../antlr/LambdaToAstVisitor';
import {AstToJavascriptVisitor} from '../ast/AstToJavascriptVisitor';
import {AstToPythonVisitor} from '../ast/AstToPythonVisitor';

const lcc = async (
  file: string,
  output?: string,
  {language} = {language: 'javascript'}
) => {
  if (language !== 'javascript' && language !== 'python') {
    console.error(`${language} not yet supported`);
    return;
  }

  const data = await readFile(file);
  const inputStream = await CharStreams.fromString(data.toString());
  const lexer = new LambdaCalculusLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new LambdaCalculusParser(tokenStream);

  const expression = parser.expression();
  const astConverter = new LambdaToAstVisitor();
  const ast = expression.accept(astConverter);

  const converter =
    language === 'javascript'
      ? new AstToJavascriptVisitor()
      : new AstToPythonVisitor();

  const result = ast.accept(converter);
  if (output) {
    await writeFile(output, result, 'utf-8');
  } else {
    console.log(result);
  }
};

export {lcc};
