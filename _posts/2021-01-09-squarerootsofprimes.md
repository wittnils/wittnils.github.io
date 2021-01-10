---
layout : post
title: "The square root of a prime number is irrational"
date: 2021-01-08
tag: Algebra
---
Let $$p\in \mathbb{Z}$$ be a prime number. Then $$\sqrt{p}$$ is irrational. 

**Remark**: There are more elementary ways to show this, but this is very fun. 

**Proof:** Consider the polynomial $$f_p:=X^2-p\in \mathbb{Q}[X]$$, then $$f_p$$ is in $$\mathbb{Z}[X]$$. Eisenstein's criterion yields that $$f_p$$ is irreducible over $$\mathbb{Q}[X]$$. By construction $$\sqrt{p}$$ is a root of $$f_p$$. Therefore $$\mathbb{Q}(\sqrt{p})/\mathbb{Q}$$ has degree two. In particular we get that $$\sqrt{p}$$ is irrational because otherwise the degree of $$\mathbb{Q}(\sqrt{p})/\mathbb{Q}$$ would be one. 

**Remark:** Using this strategy we immediately obtain that $$n$$-th roots of prime numbers are irrational. 
