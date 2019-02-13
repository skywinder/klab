```act
behaviour callMe of Int
interface callMe(int x)

iff
   VCallValue == 0

returns #unsigned(x)
```
asd
```act
behaviour callIt of Uint
interface callIt(uint y)

types

    Int : address IntLike

storage

    0 |-> Int

storage Int

iff

   VCallDepth < 1024
   VCallValue == 0

if 

   #rangeSInt(256, y)

calls

    Int.callMe
```
