## Dasdddsd

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

```
behaviour suck of D0Impl
interface suck(address u, int256 Delta_D)
// bla

types

  Root : address
  V_p  : int256
  D_u  : int256
  P    : int256
  V    : int256
  G    : int256
  VGas : uint256

storage

  0 |-> Root
  9 |-> uint(V_p)
  10 |-> uint(P)
  11 |-> uint(V) => uint(V -Int Delta_D)
  12 |-> G
  #hashedLocation("DappHub", 4, u) |-> uint(D_u) => uint(D_u +Int Delta_D)

iff

  Root == CALLER_ID
  V - Delta_D >= 0
  D_u + Delta_D >= 0

iff in range int256

  V - Delta_D
  D_u + Delta_D

if

  VGas > 300000
```

hahhaahahaha

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,

### das
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
