/* ============================================================
   THE EXAMINED MIND — SCRIPT.JS
   Handles: articles data, rendering, search, filter,
            modal, scroll effects, animations, nav.
   ============================================================ */

'use strict';

/* ── 1. ARTICLES DATA ─────────────────────────────────────── */
const articles = [
  {
    id: 1,
    title: 'Why Incentives Shape Human Behavior More Than We Admit',
    category: 'Economics',
    author: 'The Editor',
    date: 'December 12, 2024',
    readingTime: '9 min read',
    excerpt: 'Incentives are the gravitational fields of human action. We move toward rewards and away from costs—often without realising we are moving at all. This piece examines why understanding incentives is the single most important skill for understanding human institutions.',
    content: `<p>The economist Charlie Munger once said that he had never seen a person praised for recognising the power of incentives. It is, he observed, the most underappreciated variable in all of human reasoning. Everyone acknowledges that incentives matter. Few pause to consider the degree to which they govern nearly everything.</p>

<p>Consider the structure of a hospital. Doctors are incentivised to order tests. Hospitals are incentivised to fill beds. Insurance companies are incentivised to deny claims. None of these actors needs to be malicious for the system to produce outcomes that harm patients. The incentives are simply misaligned with the stated purpose of medicine. This is not a failure of character. It is a failure of design.</p>

<p>Adam Smith understood this more than two centuries ago. The invisible hand—that much-celebrated and much-misunderstood metaphor—was not a claim about altruism. It was a claim about mechanism. When individuals pursue their own interests within a well-structured system of exchange, the aggregate result can be socially beneficial, not because anyone intended it, but because the incentives point in the right direction.</p>

<p>The key word is "can." Smith was not naive. He wrote extensively about the dangers of concentrated market power, regulatory capture, and mercantilist self-dealing. The invisible hand works only when certain structural conditions are met. When those conditions fail—when externalities go unpriced, when information is asymmetric, when monopolies can exclude competition—incentives stop aligning private benefit with public good.</p>

<p>What makes incentives so difficult to reason about clearly is that they operate at multiple levels simultaneously. There are material incentives: money, status, physical safety. There are social incentives: reputation, belonging, the approval of peers. And there are psychological incentives: the desire for cognitive consistency, the aversion to regret, the satisfaction of living in alignment with stated values.</p>

<p>A policy that changes only material incentives may be defeated by social ones. A workplace that restructures financial rewards may still fail if it ignores the human need for recognition. The most sophisticated institutional designers understand that people are not optimisers of a single variable but navigators of a complex incentive landscape. Getting this wrong is the source of most failed reforms.</p>

<p>The practical implication is this: before designing any system intended to change human behaviour, map the incentive structure it will create. Ask not what people say they will do, but what the incentives reward them for doing. Then redesign around the answer. This discipline—tedious as it sounds—is among the highest forms of social intelligence.</p>`,
    featured: true,
  },
  {
    id: 2,
    title: 'Understanding Opportunity Cost: The Price of Every Choice',
    category: 'Economics',
    author: 'The Editor',
    date: 'November 28, 2024',
    readingTime: '7 min read',
    excerpt: 'Every decision has a shadow: the alternative you did not choose. Opportunity cost is not merely an economist\'s abstraction but the single most important concept for evaluating how we spend the finite currency of our lives.',
    content: `<p>Frédéric Bastiat, the nineteenth-century French economist, distinguished between what is seen and what is unseen. The immediate effects of a decision are visible: you can point to them, count them, photograph them. The opportunity costs are invisible: they are the things that would have existed had you chosen differently.</p>

<p>This invisibility makes opportunity cost one of the most consistently underweighted variables in human decision-making. When a government builds a stadium, we see the stadium. We do not see the hospital, the school, or the tax relief that the same funds would have produced. When a person spends Saturday watching television, they see the entertainment. They do not see the book they didn't write or the friendship they didn't deepen.</p>

<p>Economists define opportunity cost formally as the value of the next-best alternative foregone when making a choice. But this definition, though precise, can obscure the concept's full reach. Opportunity cost is not only about money or time. It applies to attention, energy, emotional bandwidth, and cognitive capacity. Every resource we have is finite. Every use of that resource forecloses other uses.</p>

<p>The insight extends into policy. Arguments for subsidising one industry must grapple with the question of which other industry will go unsubsidised. Arguments for protective tariffs must account for the higher prices that domestic consumers will pay. The vocabulary of opportunity cost forces us to speak in trade-offs rather than free lunches—a discipline that is inconvenient but essential.</p>

<p>For individuals, the concept is equally clarifying. The question is not whether to do something but what you are trading it for. A career choice is not made in isolation; it is made against all the other careers that same time and energy could have built. A relationship sustained at great cost should be evaluated not only by what it provides but by what it prevents.</p>

<p>None of this implies that opportunity costs are always calculable, or that a life lived primarily as a ledger is a life well-lived. But a mind trained to see the unseen—to ask, always, "compared to what?"—is a mind less likely to be fooled by arguments that present only half the picture.</p>`,
    featured: false,
  },
  {
    id: 3,
    title: 'The Mathematics of Voting Systems',
    category: 'Mathematics',
    author: 'The Editor',
    date: 'November 14, 2024',
    readingTime: '11 min read',
    excerpt: 'Arrow\'s Impossibility Theorem demonstrated that no voting system can simultaneously satisfy all the fairness criteria we intuitively expect. This is not a defect of any particular design but a mathematical truth about the nature of collective choice.',
    content: `<p>In 1951, the economist Kenneth Arrow proved something that should have been more disturbing than it was. He showed that there is no possible voting system that satisfies a small set of apparently reasonable fairness conditions all at once. This result, known as Arrow's Impossibility Theorem, is one of the most elegant and unsettling results in all of social science.</p>

<p>The conditions Arrow specified were modest by design. A voting system should produce a complete ranking of alternatives. It should satisfy unanimity: if every voter prefers A to B, the collective should prefer A to B. It should satisfy independence of irrelevant alternatives: the relative ranking of A and B should not be affected by the introduction of a third option C. And it should be non-dictatorial: no single voter should always determine the collective outcome.</p>

<p>Arrow proved that no system can satisfy all four. You must sacrifice at least one. This is not a practical limitation imposed by complexity or cost. It is a logical impossibility, as certain as the irrationality of the square root of two.</p>

<p>The real-world implications are significant. Plurality voting—the system used in most British and American elections—consistently violates independence of irrelevant alternatives. Third-party candidates frequently act as spoilers: their presence changes outcomes even when they have no chance of winning. This is not a feature or a bug. It is a mathematical consequence of the system's design.</p>

<p>Ranked-choice voting addresses some of these problems but introduces others. It satisfies more of Arrow's criteria, but it fails to satisfy them all—because nothing can. The Condorcet criterion, which says that a candidate who beats every other candidate in head-to-head comparison should win, is also not always satisfiable: it is possible to have a voting cycle in which A beats B, B beats C, and C beats A, with no Condorcet winner at all.</p>

<p>The lesson is not that democracy is incoherent. The lesson is that the aggregation of preferences is genuinely, mathematically difficult—and that claims about the perfect voting system should be received with healthy scepticism. Every system makes trade-offs. The question is which trade-offs a given society is willing to make.</p>`,
    featured: false,
  },
  {
    id: 4,
    title: 'The Beauty of Mathematical Proof',
    category: 'Mathematics',
    author: 'The Editor',
    date: 'October 30, 2024',
    readingTime: '8 min read',
    excerpt: 'A mathematical proof is not merely a verification of truth. It is an explanation of why something must be true—a chain of necessity that eliminates all possible doubt. Understanding what makes a proof beautiful illuminates something deep about the nature of knowledge itself.',
    content: `<p>G.H. Hardy, the great English mathematician, claimed that there is no permanent place in mathematics for ugly mathematics. By "ugly" he meant something specific: a proof that simply establishes that something is true without explaining why it must be so. A beautiful proof, in Hardy's sense, does not merely verify. It illuminates.</p>

<p>Consider Euclid's proof that there are infinitely many primes. The proof is over two thousand years old and takes perhaps three lines. Assume, for contradiction, that there are finitely many primes: p₁, p₂, ..., pₙ. Construct a new number by multiplying all of them together and adding one: N = (p₁ × p₂ × ... × pₙ) + 1. This number is either prime itself—a new prime not on our list—or it has a prime factor not on our list, since dividing N by any of our listed primes leaves a remainder of one. Either way, we have a prime not on our original list. Contradiction. The primes are therefore infinite.</p>

<p>What makes this proof beautiful is not merely its brevity but its inevitability. Once you see it, you cannot unsee it. The structure of the argument mirrors the structure of the truth it reveals. This is what Hardy meant by permanence: a proof of this quality does not become less true as mathematics develops. It remains exactly what it was when Euclid first wrote it down.</p>

<p>Contrast this with computer-assisted proofs, like the famous four-colour theorem proved in 1976 by Appel and Haken. The proof works by reducing the problem to a finite number of cases and checking each one computationally. The result is unquestionably correct. But many mathematicians find it deeply unsatisfying, because it does not explain why the four-colour theorem is true—it merely shows that in every case that could arise, four colours suffice.</p>

<p>The distinction matters philosophically. Mathematics is the one discipline in which certainty is possible, and the vehicle of that certainty is proof. But proof does two things that should not be conflated: it establishes truth and it conveys understanding. The four-colour proof does the first without the second. Euclid's proof does both simultaneously. The aspiration of pure mathematics has always been to achieve both at once.</p>`,
    featured: false,
  },
  {
    id: 5,
    title: 'How Algorithms Quietly Restructure Society',
    category: 'Technology',
    author: 'The Editor',
    date: 'October 15, 2024',
    readingTime: '10 min read',
    excerpt: 'Algorithms now govern who sees which jobs, which news, which credit offers, and which people. Understanding how they work—and how they fail—is no longer optional for an educated citizen of the modern world.',
    content: `<p>When the word "algorithm" first entered mainstream discourse, it was used primarily in its technical sense: a defined sequence of steps for solving a computational problem. Today it is used to describe something far more pervasive—the automated decision-making systems that increasingly determine the texture of everyday life.</p>

<p>The shift matters. A sorting algorithm is morally neutral: it simply arranges data. A hiring algorithm, a lending algorithm, or a content-recommendation algorithm is not. Each embeds assumptions about what is relevant, what is desirable, and whose interests matter. These assumptions are frequently invisible, often unquestioned, and sometimes actively harmful.</p>

<p>Consider recidivism algorithms, used by American courts to predict the likelihood that a convicted defendant will reoffend. ProPublica's 2016 investigation into the COMPAS algorithm found that it incorrectly flagged Black defendants as future criminals at nearly twice the rate of white defendants. The company behind the algorithm disputed this characterisation. But the dispute itself revealed something important: there is no neutral definition of "fairness" in a predictive system. Different mathematical definitions of fairness—equal false positive rates, equal false negative rates, equal calibration—are provably incompatible. The algorithm had made a choice about which kind of fairness to optimise for. That choice had been made by engineers, not by any democratic process, and was embedded invisibly in a system used by judges.</p>

<p>Recommendation algorithms present a different but related set of problems. The stated goal of a recommendation system is to maximise engagement—the time a user spends on the platform. Engagement is measurable. Welfare is not. Outrage, anxiety, and addictive compulsion drive engagement just as effectively as genuine value. A system optimising for one will not distinguish between these, unless someone explicitly teaches it to.</p>

<p>This is not a counsel of despair. Algorithms can also reduce human bias, improve efficiency, and expand access to services that were once gatekept by human prejudice. The point is that these outcomes are not automatic. They require deliberate choices about what to optimise for, explicit attention to who bears the costs of errors, and ongoing accountability to those affected. Algorithmic literacy—the capacity to ask the right questions about automated systems—is becoming a prerequisite for democratic participation.</p>`,
    featured: false,
  },
  {
    id: 6,
    title: 'Can Artificial Intelligence Actually Reason?',
    category: 'Computer Science',
    author: 'The Editor',
    date: 'September 28, 2024',
    readingTime: '12 min read',
    excerpt: 'Large language models produce outputs that look like reasoning. But appearance and reality are not the same thing. Examining what these systems do—and do not—do illuminates fundamental questions about the nature of intelligence itself.',
    content: `<p>The question sounds like philosophy. In practice, it is engineering. And the answer matters enormously—not only for understanding current AI systems, but for deciding how much trust to place in them, where to deploy them, and what kinds of problems they might actually help solve.</p>

<p>When a large language model writes a coherent mathematical proof, it is doing something impressive. But is it reasoning? The distinction turns on what we mean by the word. If reasoning means "producing outputs that look like the products of reasoning," then yes, clearly. If it means "applying general logical principles in a flexible way, tracking entailments, detecting contradictions, and building on true beliefs to arrive at new true beliefs"—the picture becomes murkier.</p>

<p>The evidence for genuine reasoning in current language models is mixed. On standardised tests of mathematical and logical reasoning, large models perform well above chance—and on some benchmarks, comparably to expert humans. But performance on benchmarks is not the same as capability: it is possible to achieve high test scores by learning patterns from training data rather than by applying abstract principles. When questions are rephrased or slightly modified, model performance often drops significantly, suggesting that what was learned was something more like pattern-matching than genuine generalisation.</p>

<p>Proponents of the strong view—that large language models are doing something meaningfully close to reasoning—point to emergent capabilities: behaviours that appear spontaneously as models scale up, without being explicitly trained. Critics counter that scale does not change the fundamental mechanism, which remains statistical prediction of the next token. No amount of additional computation, on this view, will produce a system that genuinely understands what it is saying.</p>

<p>This debate will not be resolved here. But it has a practical upshot. If LLMs are reasoning, they can be trusted with problems that require genuine novelty—discovering proofs no human has found, designing molecules no human has imagined. If they are pattern-matching—even very sophisticated pattern-matching—their reliability is bounded by the distribution of their training data, and they will fail in ways that are difficult to predict on problems that lie outside that distribution. The stakes of getting this wrong are not small.</p>`,
    featured: false,
  },
  {
    id: 7,
    title: 'Game Theory Beyond the Classroom',
    category: 'Economics',
    author: 'The Editor',
    date: 'September 12, 2024',
    readingTime: '9 min read',
    excerpt: 'Game theory is taught as a set of elegant models. But its real power lies in what it teaches us about the structure of strategic situations—why cooperation is fragile, why arms races are self-defeating, and why the right institutional design can change outcomes without changing people.',
    content: `<p>The Prisoner's Dilemma is the most famous thought experiment in the history of the social sciences, and it has been told and retold so many times that it has acquired the dull familiarity of a well-worn proverb. Two prisoners, unable to communicate, each choose whether to betray the other or stay silent. If both stay silent, both get light sentences. If both betray, both get heavy ones. If one betrays and the other stays silent, the betrayer goes free and the silent one gets the worst sentence of all.</p>

<p>The dilemma is that whatever the other prisoner does, each player is better off betraying. Betrayal is the dominant strategy. And yet, if both players pursue their dominant strategy, they both end up worse off than if they had both stayed silent. Individual rationality produces collective irrationality. This is not a curiosity of game theory; it is a structural feature of an enormous range of real-world situations.</p>

<p>Climate change is a Prisoner's Dilemma played between nations. Overfishing is a Prisoner's Dilemma played between fishing fleets. Corporate price wars are Prisoner's Dilemmas in which the equilibrium destroys the profit of every player. In each case, the outcome everyone fears—mutual defection—is also the individually rational response to the situation as structured.</p>

<p>The game-theoretic solution is not to appeal to altruism. It is to change the structure of the game. If players interact repeatedly and can observe each other's behaviour, cooperation can emerge and sustain itself, because the future value of a cooperative reputation exceeds the short-term gain from betrayal. This is the mechanism behind most sustained human cooperation—what Robert Axelrod's famous tournament demonstrated so compellingly.</p>

<p>Alternatively, the game's payoffs can be restructured through institutions: treaties, regulations, taxes, contracts. Carbon pricing does not rely on companies caring about the climate. It changes the economics so that reducing emissions is also the individually rational thing to do. This is game theory applied as institutional design—and it is, arguably, the most important use of economic theory in practical governance.</p>`,
    featured: false,
  },
  {
    id: 8,
    title: 'When Markets Fail and Why It Matters',
    category: 'Economics',
    author: 'The Editor',
    date: 'August 27, 2024',
    readingTime: '10 min read',
    excerpt: 'Markets are the most powerful mechanism for coordinating human activity that history has produced. But they fail in predictable ways. Understanding those failure modes is the prerequisite for thinking clearly about the proper role of the state.',
    content: `<p>The textbook market is a beautiful thing: a system in which prices aggregate dispersed information, guide resources to their most valued uses, and reward producers for satisfying the genuine preferences of consumers. Under the right conditions—competitive markets, clearly defined property rights, no externalities, perfect information—markets produce efficient outcomes with stunning regularity.</p>

<p>The practical question is whether the conditions for market efficiency are usually met. On careful examination, they are not—not fully, and not always. Market failure is not the exception but the rule; the question is its severity.</p>

<p>Externalities are the most familiar category. A factory that pollutes a river imposes costs on downstream users that are not captured in the price of its product. The market therefore overproduces pollution: because the factory does not pay for what it is doing, it does more of it than is socially optimal. The classic remedy is Pigouvian taxation—a tax equal to the social cost of the externality, so that private costs align with social costs. This is not a rejection of market logic. It is an application of it.</p>

<p>Public goods present a different problem. A national defence system protects everyone regardless of whether they contribute to its cost. Because exclusion is impossible and one person's protection does not reduce another's, individuals have little incentive to voluntarily fund the good. The private market undersupplies it. Government provision, funded by compulsory taxation, is the canonical solution—not because government is efficient, but because the alternative is worse.</p>

<p>Information asymmetries generate a third category of failure. George Akerlof's celebrated paper on the market for lemons showed that when sellers know more about product quality than buyers, markets can unravel entirely: only low-quality goods survive, because buyers, unable to distinguish them from high-quality goods, are unwilling to pay high-quality prices. Used-car markets, health insurance markets, and financial markets all display versions of this problem.</p>

<p>The point is not that markets should be superseded. It is that intelligent market design—and appropriate, targeted intervention where markets systematically fail—requires understanding the conditions under which markets work and the conditions under which they do not. That understanding is what distinguishes economics as a discipline from mere ideology.</p>`,
    featured: false,
  },
  {
    id: 9,
    title: 'Learning Through First Principles',
    category: 'Essays',
    author: 'The Editor',
    date: 'August 10, 2024',
    readingTime: '7 min read',
    excerpt: 'Most learning is imitative. We learn by following conventions, adopting received wisdom, and copying the patterns of those who came before. First-principles thinking is the rarer and harder alternative: deriving understanding from the ground up rather than borrowing it.',
    content: `<p>Richard Feynman distinguished between two ways of knowing something. The first is knowing a name—knowing that the object is called a "sproggle," say, or an "electron," and knowing some standard things that are said about it. The second is understanding what it actually is and how it actually works—being able to reason about it from the inside, predict its behaviour in novel situations, and explain it in your own terms.</p>

<p>The first kind of knowledge is cheap and fast to acquire. It is also brittle: it collapses as soon as you encounter a question for which the standard script provides no answer. The second kind is difficult and slow to build. It is durable, generative, and transferable across contexts. Feynman spent his career trying to achieve the second kind and ruthlessly refusing to accept the first.</p>

<p>First-principles thinking starts by refusing to take anything for granted. It asks: what do I actually know, and on what basis do I know it? It works backward from the phenomena to the simplest possible principles that could explain them, and forward from those principles to their consequences. It treats every received idea as a hypothesis to be tested rather than a fact to be memorised.</p>

<p>The method is ancient—it is essentially the method of Euclid and of Socrates—but it is also permanently in tension with the way most education works. Education is efficient precisely because it transmits accumulated knowledge without requiring each student to rediscover it. But this efficiency comes at a cost: students often emerge knowing many things they do not understand. They have learned the names but not the things.</p>

<p>The antidote is deliberate. It means slowing down. It means refusing to move to a new topic until the current one is genuinely mastered. It means asking "why?" until you reach bedrock—until you arrive at claims so basic that they are self-evident, or until you recognise that your understanding was shallower than you thought. The Feynman technique—explaining a concept in simple language until you find where your explanation breaks down—is a practical implementation of this approach.</p>

<p>First-principles thinking does not scale easily. It is slow, effortful, and requires sustained attention. But it builds something that conventional learning rarely does: genuine understanding that persists, that can be applied, and that grows over time as new knowledge connects to what was already truly known.</p>`,
    featured: false,
  },
  {
    id: 10,
    title: 'Probability in Everyday Decisions',
    category: 'Mathematics',
    author: 'The Editor',
    date: 'July 22, 2024',
    readingTime: '8 min read',
    excerpt: 'Human beings are notoriously poor probabilistic reasoners. Understanding why—and learning to correct for it—is among the most practically valuable things a person can do with a mathematics education.',
    content: `<p>In 1954, the psychologist Paul Meehl published a small book called Clinical versus Statistical Prediction, in which he reviewed twenty studies comparing the predictions of trained clinicians to simple statistical formulas. In seventeen of the twenty studies, the formulas performed as well as or better than the humans. This finding has since been replicated in hundreds of studies across dozens of domains, from predicting medical outcomes to forecasting judicial decisions to estimating the quality of wine vintages.</p>

<p>Why do simple models consistently outperform experienced human judges? The answer is not that the humans lack information or expertise. It is that they use their information inconsistently and weight it incorrectly. They are subject to availability bias—overweighting information that comes easily to mind. They are subject to anchoring—relying too heavily on the first piece of information they encounter. They are subject to the conjunction fallacy—judging a specific scenario as more probable than a more general one that encompasses it.</p>

<p>Bayes' theorem—the mathematical rule for updating beliefs in light of new evidence—is perhaps the single most practically important formula outside of the physical sciences. It tells us how much a piece of evidence should shift our estimate of a probability, given our prior belief and the likelihood of seeing that evidence under different hypotheses. Virtually nobody applies it correctly by intuition. We systematically underweight base rates (the prior probability) and overweight the vividness of individual cases.</p>

<p>The classic demonstration is the medical test problem. A disease affects 1 in 1000 people. A test for it has a 99% sensitivity (correctly identifies 99% of true cases) and a 99% specificity (correctly identifies 99% of true non-cases). You test positive. What is the probability you have the disease? Most people answer around 99%. The correct answer is approximately 9%. The base rate is so low that even a very good test produces mostly false positives.</p>

<p>Training in probabilistic reasoning does not come naturally. It requires sustained practice, deliberate calibration, and a genuine commitment to updating beliefs when evidence warrants—regardless of how uncomfortable that update might be. The reward is a clearer picture of an uncertain world.</p>`,
    featured: false,
  },
  {
    id: 11,
    title: 'Data, Models, and the Limits of Reality',
    category: 'Computer Science',
    author: 'The Editor',
    date: 'July 5, 2024',
    readingTime: '9 min read',
    excerpt: 'All models are wrong. Some are useful. Understanding the gap between a model and the reality it represents is the fundamental epistemological task of quantitative reasoning—and one that most users of data consistently underestimate.',
    content: `<p>George Box's aphorism—"all models are wrong, but some are useful"—is one of the most widely quoted and least understood sentences in statistics. Its surface reading is easy: models are simplifications, simplifications introduce error, error is inevitable. But the deeper point is more interesting: the question to ask about a model is not whether it is true, but whether it is fit for purpose.</p>

<p>A map is a model of a territory. A map that included every tree, every stone, every blade of grass at 1:1 scale would be perfectly accurate and completely useless. The abstraction is not a failure of the map. It is the point of the map. Different maps of the same territory—a topographical map, a road map, a geological survey—are optimised for different purposes. None of them is the territory. All of them are useful, in context.</p>

<p>The same logic applies to statistical models. A linear regression model of house prices ignores countless variables and assumes a functional form that is certainly not literally true. But for the purpose of getting a reasonable estimate of the effect of an additional bedroom on price, in a given market, with a given dataset, it may be the best available tool. "Wrong" in the Box sense does not mean "useless." It means "limited"—and limitations only become problems when they are ignored.</p>

<p>The contemporary disease in quantitative work is not a shortage of data. It is a shortage of epistemic humility about what data can and cannot tell us. Large datasets do not solve the fundamental problem of induction: the fact that patterns observed in the past may not persist in the future. They do not solve the problem of confounding: the fact that correlated variables are not necessarily causally related. And they do not solve the problem of distributional shift: the fact that a model trained in one environment may fail when deployed in another.</p>

<p>None of this is an argument for abandoning quantitative reasoning. It is an argument for practising it carefully. The most important skill in data analysis is not a facility with particular techniques but a clear-eyed understanding of what any given technique assumes and when those assumptions are likely to fail. That understanding cannot be automated. It requires judgment—the irreducibly human element in any analytical enterprise.</p>`,
    featured: false,
  },
  {
    id: 12,
    title: 'On the Value of Thinking Across Disciplines',
    category: 'Essays',
    author: 'The Editor',
    date: 'June 18, 2024',
    readingTime: '6 min read',
    excerpt: 'The best ideas often arrive at the borders between disciplines—where the vocabulary, methods, and assumptions of one field collide with those of another. Cultivating genuine interdisciplinary thinking is harder than it sounds and more valuable than it appears.',
    content: `<p>Specialisation is the engine of modern knowledge production. By going deep into a narrow domain, researchers can make progress that would be impossible for someone trying to hold all of knowledge in their head simultaneously. The division of intellectual labour has produced the modern world. There is no serious argument against its importance.</p>

<p>But specialisation produces characteristic failure modes. Deep knowledge of a narrow domain can create an illusion of understanding about adjacent domains that share the vocabulary but not the structure. An economist who treats every problem as an optimisation problem, a physicist who treats every system as reducible to particles in motion, a psychologist who sees every question through the lens of cognitive bias—each may achieve genuine insight within their domain while making systematic errors outside it.</p>

<p>The mathematician John von Neumann observed that the sciences do not try to explain, or even to interpret. They mainly construct models—mathematical constructs that, with the addition of certain verbal interpretations, describe observed phenomena. The key word is "models." Every discipline constructs models. The discipline's unique contribution is the particular simplifications and emphases of its models, which are well-suited to some problems and poorly suited to others.</p>

<p>Genuine interdisciplinary thinking does not mean learning a little about many things. It means achieving sufficient depth in at least two domains to understand where their models fit together, where they conflict, and what each can illuminate that the other cannot see. It is more demanding than specialisation because it requires achieving something like mastery in multiple domains—and resisting the temptation to use the vocabulary of one field carelessly in another.</p>

<p>The rewards, when it works, are significant. Information theory was born when Claude Shannon applied mathematical ideas developed for one purpose to a problem in a completely different domain. Game theory transformed both economics and biology when it was applied to questions neither discipline had fully formulated. Behavioural economics emerged when psychological findings about human cognition were taken seriously by economists who had built models on assumptions of perfect rationality. The history of intellectual progress is substantially a history of productive collisions between domains.</p>

<p>The examined mind is, by necessity, a mind that refuses to stay in one place. It reads across the library. It asks what the methods of one discipline might reveal about the puzzles of another. It holds the tools of different intellectual traditions lightly enough to put them down when they stop helping and pick up others when they begin to.</p>`,
    featured: false,
  },
];

/* ── 2. CATEGORIES DATA ───────────────────────────────────── */
const categories = [
  {
    name: 'Economics',
    icon: '⚖️',
    description: 'Essays on markets, incentives, institutions, and the way economic forces quietly shape every human decision.',
  },
  {
    name: 'Mathematics',
    icon: '∑',
    description: 'Explorations of proof, probability, logic, and the unreasonable effectiveness of mathematical thinking in the real world.',
  },
  {
    name: 'Computer Science',
    icon: '⚙️',
    description: 'Writing on algorithms, complexity, artificial intelligence, and what computation reveals about the nature of knowledge.',
  },
  {
    name: 'Technology',
    icon: '◈',
    description: 'Critical analysis of how digital systems restructure society, power, attention, and human capability.',
  },
  {
    name: 'Books',
    icon: '📖',
    description: 'Careful reviews of books that changed how I think—across economics, science, history, and literature.',
  },
  {
    name: 'Essays',
    icon: '✍',
    description: 'Long-form reflections on learning, reasoning, intellectual life, and the practice of thinking well.',
  },
];

/* ── 3. STATE ─────────────────────────────────────────────── */
let currentCategory = 'all';
let currentModalId = null;

/* ── 4. DOM REFERENCES ────────────────────────────────────── */
const $  = (id) => document.getElementById(id);
const $$ = (sel) => document.querySelectorAll(sel);

const navbar         = $('navbar');
const scrollProgress = $('scrollProgress');
const scrollTopBtn   = $('scrollTop');
const hamburger      = $('hamburger');
const navLinks       = $('navLinks');
const mobileOverlay  = $('mobileOverlay');
const searchToggle   = $('searchToggle');
const searchBar      = $('searchBar');
const searchClose    = $('searchClose');
const searchInput    = $('searchInput');
const searchResults  = $('searchResults');
const featuredEl     = $('featuredArticle');
const articlesGrid   = $('articlesGrid');
const noResults      = $('noResults');
const categoriesGrid = $('categoriesGrid');
const modalOverlay   = $('modalOverlay');
const modal          = $('modal');
const modalClose     = $('modalClose');
const modalBody      = $('modalBody');
const modalMeta      = $('modalMeta');
const modalPrev      = $('modalPrev');
const modalNext      = $('modalNext');
const newsletterForm = $('newsletterForm');
const formSuccess    = $('formSuccess');

/* ── 5. NAVBAR ────────────────────────────────────────────── */
function initNavbar() {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    updateScrollProgress();
    updateScrollTop();
    updateActiveNav();
  }, { passive: true });
}

function updateScrollProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  scrollProgress.style.width = `${pct}%`;
}

function updateScrollTop() {
  if (window.scrollY > 500) {
    scrollTopBtn.hidden = false;
  } else {
    scrollTopBtn.hidden = true;
  }
}

function updateActiveNav() {
  const sections = ['home', 'articles', 'categories', 'about'];
  const offset = 120;
  let active = 'home';

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top < offset) {
      active = id;
    }
  });

  $$('.nav-link').forEach((link) => {
    link.classList.toggle('active', link.dataset.section === active);
  });
}

/* ── 6. MOBILE MENU ───────────────────────────────────────── */
function initMobileMenu() {
  hamburger.addEventListener('click', toggleMobileMenu);
  mobileOverlay.addEventListener('click', closeMobileMenu);

  $$('.nav-link').forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });
}

function toggleMobileMenu() {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  mobileOverlay.classList.toggle('visible', isOpen);
  mobileOverlay.setAttribute('aria-hidden', String(!isOpen));
  hamburger.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function closeMobileMenu() {
  navLinks.classList.remove('open');
  hamburger.classList.remove('open');
  mobileOverlay.classList.remove('visible');
  mobileOverlay.setAttribute('aria-hidden', 'true');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

/* ── 7. SEARCH ────────────────────────────────────────────── */
function initSearch() {
  searchToggle.addEventListener('click', openSearch);
  searchClose.addEventListener('click', closeSearch);
  searchInput.addEventListener('input', handleSearch);

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSearch();
  });
}

function openSearch() {
  searchBar.classList.add('open');
  searchBar.setAttribute('aria-hidden', 'false');
  searchToggle.setAttribute('aria-expanded', 'true');
  searchInput.focus();
}

function closeSearch() {
  searchBar.classList.remove('open');
  searchBar.setAttribute('aria-hidden', 'true');
  searchToggle.setAttribute('aria-expanded', 'false');
  searchInput.value = '';
  searchResults.innerHTML = '';
}

function handleSearch() {
  const q = searchInput.value.trim().toLowerCase();

  if (!q) { searchResults.innerHTML = ''; return; }

  const results = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q)
  );

  if (!results.length) {
    searchResults.innerHTML = `<p class="search-empty">No essays found for "${searchInput.value}".</p>`;
    return;
  }

  searchResults.innerHTML = results
    .slice(0, 6)
    .map(
      (a) => `
    <div class="search-result-item" role="button" tabindex="0"
         data-id="${a.id}"
         aria-label="Open article: ${a.title}">
      <span class="search-result-category">${a.category}</span>
      <span class="search-result-title">${a.title}</span>
    </div>`
    )
    .join('');

  searchResults.querySelectorAll('.search-result-item').forEach((item) => {
    item.addEventListener('click', () => {
      openModal(parseInt(item.dataset.id, 10));
      closeSearch();
    });
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(parseInt(item.dataset.id, 10));
        closeSearch();
      }
    });
  });
}

/* ── 8. FEATURED ARTICLE ──────────────────────────────────── */
function renderFeatured() {
  const article = articles.find((a) => a.featured);
  if (!article) return;

  const initial = article.title.charAt(0);

  featuredEl.innerHTML = `
    <div class="featured-image">
      <svg class="featured-image-pattern" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <polygon points="0,0 200,0 100,150" fill="none" stroke="rgba(212,175,55,0.15)" stroke-width="1"/>
        <polygon points="200,0 400,0 400,200" fill="none" stroke="rgba(212,175,55,0.12)" stroke-width="1"/>
        <polygon points="0,500 150,250 300,500" fill="none" stroke="rgba(212,175,55,0.10)" stroke-width="1"/>
        <circle cx="200" cy="250" r="130" fill="none" stroke="rgba(212,175,55,0.08)" stroke-width="1"/>
        <circle cx="200" cy="250" r="220" fill="none" stroke="rgba(212,175,55,0.06)" stroke-width="1"/>
      </svg>
      <span class="featured-image-label">${initial}</span>
      <span class="featured-badge">Featured Essay</span>
    </div>
    <div class="featured-info">
      <p class="featured-category">${article.category}</p>
      <h3 class="featured-title">${article.title}</h3>
      <p class="featured-excerpt">${article.excerpt}</p>
      <div class="featured-footer">
        <p class="featured-byline">By <span>${article.author}</span> &ensp;·&ensp; ${article.date} &ensp;·&ensp; ${article.readingTime}</p>
        <button class="btn btn-outline" data-id="${article.id}">Read Essay →</button>
      </div>
    </div>
  `;

  featuredEl.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-id]');
    const id = btn ? parseInt(btn.dataset.id, 10) : article.id;
    openModal(id);
  });

  featuredEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') openModal(article.id);
  });
}

/* ── 9. ARTICLES GRID ─────────────────────────────────────── */
function renderArticles(filter = 'all') {
  const filtered = filter === 'all'
    ? articles
    : articles.filter((a) => a.category === filter);

  noResults.hidden = filtered.length > 0;

  articlesGrid.innerHTML = filtered
    .sort((a, b) => b.id - a.id)
    .map((a) => articleCardHTML(a))
    .join('');

  // Bind click
  articlesGrid.querySelectorAll('.article-card').forEach((card) => {
    const id = parseInt(card.dataset.id, 10);
    card.addEventListener('click', () => openModal(id));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(id); }
    });
  });

  // Trigger fade-in
  requestAnimationFrame(() => {
    articlesGrid.querySelectorAll('.article-card').forEach((card, i) => {
      setTimeout(() => card.classList.add('visible'), i * 60);
    });
  });
}

function articleCardHTML(a) {
  const initial = a.title.charAt(0);
  return `
  <article class="article-card" data-id="${a.id}" tabindex="0"
           role="article" aria-label="${a.title}">
    <div class="card-image" aria-hidden="true">
      <span class="card-image-letter">${initial}</span>
    </div>
    <div class="card-body">
      <p class="card-category">${a.category}</p>
      <h3 class="card-title">${a.title}</h3>
      <p class="card-excerpt">${a.excerpt}</p>
      <div class="card-footer">
        <div class="card-meta">
          <span>${a.date}</span>
          <span class="meta-dot" aria-hidden="true">·</span>
          <span>${a.readingTime}</span>
        </div>
        <span class="card-read" aria-hidden="true">Read →</span>
      </div>
    </div>
  </article>`;
}

/* ── 10. CATEGORY FILTER ──────────────────────────────────── */
function initFilters() {
  $$('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      $$('.filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      renderArticles(currentCategory);
    });
  });
}

/* ── 11. CATEGORIES SECTION ───────────────────────────────── */
function renderCategories() {
  categoriesGrid.innerHTML = categories
    .map((cat) => {
      const count = articles.filter((a) => a.category === cat.name).length;
      return `
      <div class="category-card fade-in" role="button" tabindex="0"
           aria-label="Browse ${cat.name} essays"
           data-filter="${cat.name}">
        <div class="category-icon" aria-hidden="true">${cat.icon}</div>
        <p class="category-name">${cat.name}</p>
        <p class="category-desc">${cat.desc || cat.description}</p>
        <p class="category-count">${count} ${count === 1 ? 'Essay' : 'Essays'}</p>
      </div>`;
    })
    .join('');

  categoriesGrid.querySelectorAll('.category-card').forEach((card) => {
    const filter = card.dataset.filter;

    const activate = () => {
      // Scroll to articles, apply filter
      document.getElementById('articles').scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const btn = document.querySelector(`.filter-btn[data-category="${filter}"]`);
        if (btn) btn.click();
      }, 400);
    };

    card.addEventListener('click', activate);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
    });
  });
}

/* ── 12. MODAL ────────────────────────────────────────────── */
function openModal(id) {
  const article = articles.find((a) => a.id === id);
  if (!article) return;
  currentModalId = id;

  // Meta bar
  modalMeta.innerHTML = `
    <span class="modal-category">${article.category}</span>
    <span class="meta-dot" aria-hidden="true">·</span>
    <span>${article.readingTime}</span>`;

  // Body
  modalBody.innerHTML = `
    <div class="modal-article-image" aria-hidden="true">
      <span class="modal-article-image-letter">${article.title.charAt(0)}</span>
    </div>
    <h2 class="modal-title">${article.title}</h2>
    <div class="modal-byline">
      <span class="modal-author">${article.author}</span>
      <span class="modal-date">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        ${article.date}
      </span>
      <span class="modal-reading">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        ${article.readingTime}
      </span>
    </div>
    <div class="modal-content">${article.content}</div>`;

  // Nav buttons
  const ids = articles.map((a) => a.id);
  const idx = ids.indexOf(id);
  modalPrev.disabled = idx <= 0;
  modalNext.disabled = idx >= ids.length - 1;

  // Open
  modalOverlay.classList.add('open');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Focus trap
  setTimeout(() => modalClose.focus(), 50);
}

function closeModal() {
  modalOverlay.classList.remove('open');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  currentModalId = null;
}

function initModal() {
  modalClose.addEventListener('click', closeModal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  modalPrev.addEventListener('click', () => {
    const ids = articles.map((a) => a.id);
    const idx = ids.indexOf(currentModalId);
    if (idx > 0) openModal(ids[idx - 1]);
  });

  modalNext.addEventListener('click', () => {
    const ids = articles.map((a) => a.id);
    const idx = ids.indexOf(currentModalId);
    if (idx < ids.length - 1) openModal(ids[idx + 1]);
  });

  document.addEventListener('keydown', (e) => {
    if (!modalOverlay.classList.contains('open')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') modalPrev.click();
    if (e.key === 'ArrowRight') modalNext.click();
  });
}

/* ── 13. SCROLL TO TOP ────────────────────────────────────── */
function initScrollTop() {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ── 14. NEWSLETTER ───────────────────────────────────────── */
function initNewsletter() {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = $('emailInput').value.trim();
    if (!email || !email.includes('@')) {
      $('emailInput').focus();
      return;
    }
    formSuccess.hidden = false;
    $('emailInput').value = '';
    setTimeout(() => { formSuccess.hidden = true; }, 5000);
  });
}

/* ── 15. FADE-IN OBSERVER ─────────────────────────────────── */
function initFadeIns() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  $$('.fade-in').forEach((el) => observer.observe(el));
}

/* ── 16. SMOOTH SCROLL ────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ── 17. FOOTER CATEGORY LINKS ────────────────────────────── */
function initFooterCategoryLinks() {
  document.querySelectorAll('[data-filter]').forEach((link) => {
    if (!link.closest('.category-card')) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = link.dataset.filter;
        document.getElementById('articles').scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          const btn = document.querySelector(`.filter-btn[data-category="${filter}"]`);
          if (btn) btn.click();
        }, 400);
      });
    }
  });
}

/* ── 18. INIT ─────────────────────────────────────────────── */
function init() {
  renderFeatured();
  renderArticles('all');
  renderCategories();
  initNavbar();
  initMobileMenu();
  initSearch();
  initFilters();
  initModal();
  initScrollTop();
  initNewsletter();
  initSmoothScroll();
  initFooterCategoryLinks();

  // Delayed fade-in init to allow DOM to settle
  requestAnimationFrame(() => {
    requestAnimationFrame(initFadeIns);
  });
}

document.addEventListener('DOMContentLoaded', init);
