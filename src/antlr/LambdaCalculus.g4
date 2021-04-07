grammar LambdaCalculus;

expression
  : NUMBER                                                        # NumberExpr
| ID                                                              # IdentifierExpr
  | '(/' param=ID '=>' body=expression ')'                        # LambdaExpr
  | '(' func=expression arg=expression ')'                        # InvocationExpr
  | '(+' left=expression right=expression ')'                     # AddExpr
  | '(*' left=expression right=expression ')'                     # MultExpr
  | '(ifleq0' test=expression then=expression else=expression ')' # TernaryExpr
  | '(println' arg=expression ')'                                 # PrintExpr
  ;

fragment DIGIT
  : [0-9]
  ;

NUMBER
  : DIGIT+ ('.' DIGIT+)?
  ;

ID
  : [a-zA-Z][a-zA-Z0-9]*
  ;

WS
  : [ \t\n\r\f]+ -> skip
  ;
