import {CharStreams, CommonTokenStream} from 'antlr4ts';
import {LambdaCalculusLexer} from '../antlr/LambdaCalculusLexer';
import {LambdaCalculusParser} from '../antlr/LambdaCalculusParser';
import {readFile, writeFile} from 'fs/promises';
import {LambdaToAstVisitor} from '../antlr/LambdaToAstVisitor';
import {AstToJavascriptVisitor} from '../ast/AstToJavascriptVisitor';

const lcc = async (
  file: string,
  output?: string,
  {language} = {language: 'javascript'}
) => {
  // TODO - add support for python
  if (language !== 'javascript') {
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

  // TODO - Add support for python
  const converter = new AstToJavascriptVisitor();

  const result = ast.accept(converter);
  if (output) {
    await writeFile(output, result, 'utf-8');
  } else {
    console.log(result);
  }
};

export {lcc};
