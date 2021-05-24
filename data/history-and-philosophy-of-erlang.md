---
title: Notes on the history of Erlang
slug: notes-on-history-of-erlang
published: true
date: 2021-03-30
---

Erlang was created by Ericsson in the 1980s to solve problems they were having in the telecom industry. Telecoms had an interesting use case that's very similar to what a lot of web apps need today: they needed to make sure that the hundreds of thousands of people using their platform (the phone) had zero downtime. They wanted to handle spikes in traffic with ease, and favored reliable and predictable performance over pure speed. They were alright with gracefully degredaded service, and they wanted everything to be fault tolerant. They wanted whatever language they used to be extremely concurrent as well.

After looking for a language that solved these problems, Ericsson realized that there just wasn't one: they tried all of the alternatives (Perl, Ada, and others), and found that nothing ticked all of their boxes. As a result of this, the [Computer Science Lab at Ericsson was founded to try and fix these problems](https://www.ericsson.com/en/news/2018/5/erlang-celebrates-20-years-as-open-source).

What's interesting about how they went about doing what they did: the developers of Erlang didn't set out to build a functional programming language. They didn't set out to implement the actor model. Instead, the developers took a new approach, an experimental approach. Instead of trying to figure out what they liked and disliked from other languages, they used the scientific method (basically agile development) to add on features that worked that their test group needed.

> A very critical phase of the whole thing was that every idea we implemented and it was tested, the hard way: by actually using it and running it. That's why if you look at Erlang, it's a mixture of things... because it worked! We weren't out to make a functional language: it became functional along the way because that worked. We were never out to implement the actor model (we'd never heard of the actor model actually). [...] but we implemented the actor model because it worked.

The developers in the lab basically used a modified (and simplified) version of agile development. They took a set of problems, ran small-scale experiments, and evaluated those experiments to figure out whether or not those experiments actually fixed things. At the end, the results either made it into the final package (Erlang) because it worked, or it was just dropped.

It was very important that experiments be simple: they needed to be small-scale, easliy-testable, and easily implemented. Throughout the talk, Erlang's creators talked about how they would do a lot of rapid development work themselves, how they'd write shitty code at the start and replace it with something better later on. The focus was on idea validation, not on producing the best code. It was on finding the right set of concepts to solve a difficult problem, not on finding the _right implementation of those concepts_.

> We had the philosophy that if you get an idea and you can't implement it yourself, forget it. The idea was very much that you had to sort of be capable of programming it, dealing with it yourself. It wasn't a group of people writing a specification and another group of people implementing it... you had to do it yourself.

The culture in the lab was one that was very relaxed as well. To put it in their words:

> It was an opportunity to do things that you wanted to do, rather than sort-of working to deliver a product that had to be delivered in tight schedules.

The engineers had freedom to do what they wanted. Management treated this as an RND effort: they gave them money to try stuff out, to research things efficiently, and the programmers used that money as efficiently as they could to explore things that solved problems how they wanted in a very low-stress, low-stakes environment.

> We didn't really know where we were going. We knew in a general direction which way we were planning to go, a set of features, but what did these requirements actually mean? We were sort-of tracing out our path as we were going.

This low-stakes environment allowed them to be comfortable with dropping features that didn't make sense. Because the goal of all of the research was to solve a problem, if something didn't fit into the feature set or wasn't useful, it was dropped.

The goal was focused on producing tools for a team that solved their niche problems in as efficient a way as possible, while also preparing for future hardware. The tight feedback loops between the team they were working with (a testing team inside Ericsson) developed naturally over time as the result of some miscommunication that happened every so often. Often, researchers would build features or come up with concepts that weren't useful, or that didn't solve the problems at hand. They would think it was a beautiful, useful concept and would then present it to the reviewing team, but then the reviewing team would say "nope, we can't use that". As a result, that work was trashed.

So in review, the Erlang creators were given a space where they were free to create what they needed, where they were able to create software for an internal 'customer' that didn't need results immediately, where their salaries were secure, where they felt relaxed and didn't feel the same stress of a startup. As a result, they became much more inventive, and created a beautiful language in the end that's lasted for over 40 years.
