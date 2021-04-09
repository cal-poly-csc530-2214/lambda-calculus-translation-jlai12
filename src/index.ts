#!/usr/bin/env ts-node-script
import {program, Option} from 'commander';
import {lcc} from './lcc/lcc';

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
  .action(lcc);

if (process.argv.length < 3) {
  program.help();
}

program.parseAsync(process.argv).catch(console.log);
