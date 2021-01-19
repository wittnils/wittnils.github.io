---
layout : post
title: "Transcendet field extensions."
date: 2021-01-10
tag: Algebra
---

Most of the time when dealing with extensions of fields one is interested in rather well-behaved ones, e.g. 
they are separable, normal and algebraic ($$\to$$ galois) and those situations arise naturally when studying the 
roots of separable polynomials. 
Here we will look at (easy) transcendent extensions as well as a nice property of transcendent elements. Let $$k$$ be some field.  

**Claim 1.** The extensions $$k(Y)/k$$ where $$k(Y)=Q(k[Y])$$ is the field of fractions of $$k[Y]$$ is transcendent. 

_Reminder._ Let $$R,R'$$ be two rings. An element $$x'\in R'$$ is called _transcendent_ or not algebraic over $$R$$ if the unique ring homomorphism $$\Phi:R[X]\to R'$$ which fullfills $$\Phi\mid_R = \operatorname{id}_R$$ and $$\Phi(X)=x'$$
is _injective_. 

Proof. By the universal property of polynomial rings we get a unique homomorphism of Rings $$k[Y] \to k(Y)$$ such that $$k[X]\ni Y\mapsto Y\in k(Y)$$ and $$a\mapsto a$$ for all $$a\in k$$. Since the canonical inclusion $$k[Y]\hookrightarrow k(Y)$$ is a homomorphism of rings fullfilling this property, the one given by the universal property and the canonical inclusion must coincide. But obviously $$k[Y]\hookrightarrow k(Y)$$ is injective, therefore we have that $$Y$$ is transcendent over $$k$$. 

**Claim 2.** Let $$L/k$$ be some extension of fields and $$a\in L$$ be transcendet, then $$a^n$$ is transcendet over $$k$$ for all $$n\in \mathbb{N}$$. 

Proof. Supoose there was an element $$n\in \mathbb{N}$$ s.t. $$a^n$$ is algebraic over $$k$$. Then $$k(a^n)/k$$ is algebraic. However $$k(a)/k(a^n)$$ is finite because $$a$$ is obviously a root of 

$$X^n - a^n \in k(a^n)[X]$$

in particular $$k(a)/k(a^n)$$ is algebraic but then we have a tower of algeberaic extensions $$k(a)/k(a^n)/k$$ which would imply that $$a$$ is algebraic over $$k$$ - a contradiction. 

_Remark._ We immediatly then get that every monic $$Y^n$$ is transcendet over $$k$$ or that $$\pi^2$$ is transcendet over $$\mathbb{Q}$$, which is nice. 