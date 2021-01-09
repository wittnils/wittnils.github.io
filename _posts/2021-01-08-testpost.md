---
layout : post
title: "The Galois Group acts transitively on the roots of an irreducible polynomial"
date: 2021-01-08
tag: Algebra
---
Let $$K$$ be some field and $$f\in K[X]$$ be separable and $$L/K$$ some splitting field of $$f$$. Then $$f$$ is irreducible if and only if $$\operatorname{Gal}(L/K)$$ acts
transitively on the roots of $$f$$. 

**Proof.** Let $$a_1,\ldots,a_n\in L$$ be the roots of $$f$$ in $$L$$. Then $$K(a_i)/K$$ is finite, so in particular algebraic for every $$i\in \{1,\ldots,n\}$$. Therefore we get a unique continuation $$\sigma$$ of the canonical inclusion $$K\to L$$ such that $$\sigma:K(a_i)\to K(a_j)$$, $$\sigma(a_i)=a_j$$ and $$\sigma\mid_K=\operatorname{id}_K$$. $$\sigma$$ naturally extends to a $$K$$-homomorphism from $$K(a_i)\to \overline{L}$$ by including $$K(a_j)\to L\to \overline{L}$$. Since $$K(a_i)\subset L$$ and $$L/K$$ is algebraic $$\sigma$$ extends to a $$K$$-homomorphism $$\sigma':L\to \overline{L}$$ s.t. $$\sigma'\mid_{K(a_i)} = \sigma$$. Since $$L/K$$ is normal $$\sigma'$$ restricts itself to a $$K$$-automorphism of $$L$$, e.g. $$\tau:L\to L$$ s.t. $$\tau\mid_{K(a_i)}=\sigma$$ in particular $$\tau(a_i)=a_j$$. Thererfore we have an element of $$\operatorname{Gal}(L/K)$$ that sends $$a_i$$ to $$a_j$$. Since $$i,j$$ were arbitrary, the galois group $$\operatorname{Gal}(L/K)$$ acts transitively on the roots of $$f$$. 