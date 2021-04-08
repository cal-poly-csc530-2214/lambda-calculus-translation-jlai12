#!/usr/bin/env ts-node-script
import {program, Option} from 'commander';

import {CharStreams, CommonTokenStream} from 'antlr4ts';
import {LambdaCalculusLexer} from './antlr/LambdaCalculusLexer';
import {LambdaCalculusParser} from './antlr/LambdaCalculusParser';
import {readFile, writeFile} from 'fs/promises';
import {LambdaToAstVisitor} from './antlr/LambdaToAstVisitor';
import {AstToJavascriptVisitor} from './ast/AstToJavascriptVisitor';

program
  .name('lcc')
  .arguments('<file> [output]')
  .description('Translate lambda calculus into javascript or python', {
    file: 'Path to the lambda calculus input file',
    output: 'Output path for compilation result. Defaults to stdout',
  })
  .addOption(
    new Option(
      '-l, --language <language>',
      'Target language of lambda calculus compilation'
    )
      .choices(['javascript', 'python'])
      .default('javascript')
  )
  .action(async (file, output, {language}) => {
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
  });

if (process.argv.length < 3) {
  program.help();
}

program.parseAsync(process.argv).catch(console.log);
