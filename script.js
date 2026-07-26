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
    date: 'June 29, 2026',
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
    date: 'June 30, 2026',
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
    date: 'July 1, 2026',
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
    date: 'July 2, 2026',
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
    date: 'July 3, 2026',
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
    date: 'July 4, 2026',
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
    date: 'July 5, 2026',
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
    date: 'July 6, 2026',
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
    date: 'July 7, 2026',
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
    date: 'July 8, 2026',
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
    date: 'July 9, 2026',
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
    date: 'July 10, 2026',
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
  {
    id: 13,
    title: 'Why Markets Are More Random Than Most Investors Think',
    category: 'Quantitative Finance',
    author: 'The Editor',
    date: 'July 11, 2026',
    readingTime: '12 min read',
    excerpt: 'An exploration of probability, randomness, and why financial markets are harder to predict than they appear.',
    content: `<p class="modal-subtitle"><em>An introduction to probability, volatility, and the limits of prediction in financial markets</em></p>

<h3>A Monday That Shouldn't Have Happened</h3>
<p>On October 19, 1987, the Dow Jones Industrial Average fell 22.6% in a single day. No war broke out. No bank collapsed that morning. No president was assassinated. By most conventional measures, nothing had happened that Monday to justify wiping out nearly a quarter of the value of America's largest companies in a few trading hours.</p>

<p>Economists have spent almost four decades trying to explain Black Monday, and the honest answer is that no single cause fully accounts for it. Portfolio insurance programs, which were supposed to protect investors by automatically selling stocks as prices fell, likely made the decline worse by triggering more selling as prices dropped further. But this only explains part of the mechanism, not why the crash started or why it reached the size it did.</p>

<p>This is the uncomfortable starting point for anyone who wants to understand financial markets seriously: some of the largest, most consequential moves in market history do not have tidy explanations. If you are drawn to markets because you want a system, a model, or a story that makes sense of them, Black Monday is a good place to have your first dose of humility.</p>

<div class="callout"><strong>Key Takeaway:</strong> Markets are driven by millions of independent decisions made under uncertainty. Even with unlimited data, some outcomes remain fundamentally unpredictable, not because we haven't found the right model yet, but because the system itself contains genuine randomness.</div>

<h3>Why We See Patterns That Aren't There</h3>
<p>Human brains evolved to find patterns. A rustle in the grass that might be a predator, a cluster of berries that might mean more berries nearby: creatures that spotted patterns quickly, even imperfectly, tended to survive better than creatures that waited for statistical proof. This instinct is called <em>apophenia</em>: the tendency to perceive meaningful connections in unrelated or random data.</p>

<p>Apophenia does not switch off when we open a stock chart. Show someone a random walk generated by a coin flip and a real stock price chart, side by side, and most people cannot reliably tell them apart. Both contain what look like trends, reversals, and momentum. Financial journalists, and sometimes analysts who should know better, will explain a market's daily move with a headline like "Stocks fall on inflation fears," even when the actual cause of a 0.3% move is close to indistinguishable from noise.</p>

<p>This matters because pattern-seeking has a cost in markets specifically. If you believe you see a repeating pattern, a stock that "always bounces back" after a drop, a sector that "always outperforms in September," you will act on it. Sometimes you'll be rewarded by chance, which reinforces the belief. The gambler who wins on a hunch remembers the win far better than the ten times the hunch failed.</p>

<p>Quantitative finance exists partly as a discipline against this instinct. Instead of trusting the story, quants ask: does this pattern survive rigorous statistical testing, out of sample, after accounting for the number of patterns we searched for in the first place?</p>

<h3>Randomness Is Not the Enemy of Understanding</h3>
<p>Calling markets "random" sounds like giving up. It isn't. Probability theory is precisely the mathematics built to handle situations where individual outcomes are unpredictable but the aggregate behavior follows describable rules.</p>

<p>Think of rolling a die. You cannot predict any single roll. But you can say with complete confidence that, over many rolls, each face appears about one-sixth of the time, and you can calculate the odds of any combination you like. Markets are far messier than dice, but the same principle of studying the shape of an uncertain process, rather than trying to call each outcome, is the foundation of quantitative finance.</p>

<p>A useful mental model: think of daily price changes as the result of thousands of participants, pension funds, individual traders, algorithms, central banks, each reacting to slightly different information, on slightly different timelines, with slightly different goals. No single actor controls the outcome. What you observe is closer to the sum of many small, semi-independent pushes than the output of one coherent process. That sum behaves statistically, even when no one piece of it is predictable.</p>

<h3>Returns, Not Prices</h3>
<p>Beginners look at stock prices. Professionals look at returns. This distinction sounds pedantic, but it changes everything about how you can analyze a market mathematically.</p>

<p>A stock's price is not directly comparable across companies or across time. A stock trading at $400 is not "more expensive" or "riskier" than one trading at $40 in any meaningful sense; the number depends on arbitrary decisions like how many shares the company issued. What matters is the <strong>return</strong>, the percentage change in value over some period.</p>

<p>If a stock goes from $100 to $103 in a day, its daily return is 3%. This number can be compared directly to the return on a $10 stock, a bond, or an entire index. Returns are also, to a first approximation, closer to statistically well-behaved than prices, which tend to drift and trend in ways that break most of the tools of classical statistics.</p>

<p>There's a technical reason quants often use <em>logarithmic</em> returns rather than simple percentage returns: log returns add up cleanly over multiple periods, and they treat a gain and an equivalent loss more symmetrically. A stock that rises 50% and then falls 50% does not return to its starting price (it ends 25% lower), and log returns handle this kind of compounding more gracefully than simple returns do. For most intuitive purposes, though, thinking of a return as "the percentage change" is enough to follow the reasoning that comes next.</p>

<h3>The Bell Curve's Long Reign</h3>
<p>Once you're working with returns instead of prices, a natural question follows: what does the distribution of possible returns look like? If you plotted every daily return of a major stock index over fifty years on a chart, what shape would emerge?</p>

<p>For a long time, the answer economists reached for was the <strong>normal distribution</strong>, the familiar bell curve, symmetric around a central average, where extreme outcomes become rapidly less likely the further they sit from the mean. It's the same distribution that describes human height or measurement error in a physics experiment.</p>

<p>The normal distribution earned its place in finance for good mathematical reasons. It's fully described by just two numbers: the mean (the average return) and the standard deviation (a measure of how spread out returns tend to be, commonly used as a proxy for risk). It's mathematically tractable, meaning the equations built on top of it, options pricing formulas, portfolio optimization, risk models, actually have clean, solvable answers. Louis Bachelier used it to model stock prices in 1900, decades before mainstream economics took the idea seriously, and it became the backbone of models like Harry Markowitz's portfolio theory and the Black-Scholes options pricing formula.</p>

<div class="callout"><strong>Key Takeaway:</strong> The normal distribution isn't used in finance because markets are proven to behave normally. It's used because it's simple, well understood, and good enough for many everyday purposes. The trouble starts when "good enough most of the time" gets treated as "true all of the time."</div>

<h3>Where the Bell Curve Breaks</h3>
<p>If daily stock returns were truly normally distributed, extreme market crashes would be almost impossibly rare. Using standard estimates of stock market volatility, a one-day move as large as Black Monday's 22.6% decline should occur, under a normal distribution, something like once every several trillion years of trading, far longer than the age of the universe. Yet it happened once in a single century, and smaller but still extreme moves happen with uncomfortable regularity.</p>

<p>This gap between the model's prediction and reality has a name: <strong>fat tails</strong>. Real financial returns have far more extreme events, both up and down, than the normal distribution predicts. The "tails" of the actual distribution, the far edges representing rare, large moves, are fatter, meaning more probable, than the bell curve assumes.</p>

<p>Real returns also tend to show <strong>negative skewness</strong>: large drops happen more often, and can be sharper, than large gains of equivalent size. Markets tend to climb steadily and fall suddenly. A slow grind upward over months can be erased in days, a pattern visible in the run-up to 1987, 2008, and 2020 alike.</p>

<p>There is also <strong>volatility clustering</strong>: large moves tend to follow large moves, and calm periods tend to follow calm periods. This alone violates a core assumption of the simple normal-distribution model, which treats each day's return as independent of the last. In reality, a turbulent Tuesday makes a turbulent Wednesday more likely, not less.</p>

<h3>Fatter Tails, Better Fit: Student's t-Distribution</h3>
<p>Because of these failures, quantitative analysts frequently reach for an alternative: the <strong>Student's t-distribution</strong>. It was developed in 1908 by William Sealy Gosset, a chemist and statistician working at the Guinness brewery in Dublin, who published under the pseudonym "Student" because his employer restricted publication of trade-related research.</p>

<p>Visually, the t-distribution looks like the normal distribution's more cautious cousin. It's also bell-shaped and symmetric, but it has heavier tails: it assigns noticeably higher probability to extreme outcomes. The t-distribution has a parameter called <strong>degrees of freedom</strong>, which controls exactly how fat those tails are. With very high degrees of freedom, the t-distribution converges to look almost exactly like the normal distribution. With low degrees of freedom, its tails balloon, reflecting a world where extreme surprises are common.</p>

<p>Quants favor the t-distribution for modeling financial returns precisely because it can be tuned, using historical data, to match how often large moves actually occur, rather than assuming they're vanishingly rare by fiat. It doesn't fix every problem, it's still symmetric, for instance, so it doesn't capture skewness on its own, but it represents a meaningfully closer approximation to observed market behavior than the plain bell curve.</p>

<div class="callout"><strong>Key Takeaway:</strong> No distribution is "correct." The t-distribution isn't chosen because it's the truth, but because it's a better-fitting approximation for a specific purpose: estimating how often extreme losses might occur.</div>

<h3>Volatility: The Market's Mood Ring</h3>
<p><strong>Volatility</strong> measures how much and how quickly prices move, regardless of direction. A stock that swings wildly between gains and losses is described as highly volatile, even if it ends the year exactly where it started. Volatility is not the same thing as a market going down; it's a measure of how uncertain and unstable prices are at a given moment.</p>

<p>Volatility is not constant. It clusters, as mentioned above, and it spikes dramatically during periods of crisis, when normal assumptions about how markets behave stop applying. During calm periods, models built on modest, well-behaved volatility estimates tend to work reasonably well. During a crisis, correlations between assets that are usually only loosely related can suddenly move together, a phenomenon risk managers grimly call "correlations going to one." Diversification, the strategy of spreading investment across different assets specifically so they don't all fall at once, can quietly stop working exactly when it's needed most.</p>

<p>This is part of why crises are so much harder to model than ordinary trading days. It isn't only that prices fall; it's that the entire statistical structure of the market, the relationships between assets, the typical size of daily moves, the reliability of historical patterns, shifts underneath the model while it's still running.</p>

<h3>Three Crises, One Lesson</h3>
<p><strong>Black Monday, 1987.</strong> A near-23% single-day drop in the Dow, with no dominant news catalyst, driven partly by mechanical selling from portfolio insurance strategies that amplified the initial decline into something far larger.</p>

<p><strong>The Global Financial Crisis, 2008.</strong> Financial institutions had built enormous positions in mortgage-backed securities using risk models that assumed housing prices in different regions of the United States were only loosely correlated. When housing prices fell broadly and simultaneously across regions, that assumption collapsed, and losses that models had judged nearly impossible occurred at scale. Lehman Brothers, one of the oldest investment banks on Wall Street, filed for bankruptcy in September 2008, and credit markets froze as institutions lost confidence in each other's solvency.</p>

<p><strong>The COVID-19 crash, 2020.</strong> In February and March 2020, U.S. stock indices fell roughly 34% from their peak in about five weeks, one of the fastest declines into a bear market in history, as the scale of the pandemic and the economic shutdowns it would require became clear. Volatility, as measured by indices like the VIX, reached levels comparable to or exceeding those seen in 2008.</p>

<p>Each crisis had a different immediate trigger. What they share is a pattern: models calibrated on recent, relatively calm data were caught unprepared for a regime change, and the size of the resulting moves fell well outside what a normal-distribution assumption would have judged plausible.</p>

<div class="callout"><strong>Key Takeaway:</strong> History's biggest market crashes weren't identical events, but they rhyme in one respect: each exposed the gap between how models assumed markets would behave and how markets actually behaved under stress.</div>

<h3>How Professionals Actually Use These Tools</h3>
<p>Hedge funds, investment banks, and quantitative research teams don't use probability distributions because they believe they've found a formula for predicting the market. They use them to manage what they can't predict.</p>

<p><strong>Value at Risk (VaR)</strong> is a widely used risk measure that estimates, based on a chosen probability distribution and historical data, the maximum loss a portfolio is likely to experience over a given time period at a certain confidence level. For example, a 1-day 99% VaR of $10 million means the model estimates only a 1% chance of losing more than $10 million in a single day. Firms use VaR and related measures to set position limits, decide how much capital to hold in reserve, and structure conversations about risk with regulators and boards, not to time trades.</p>

<p><strong>Stress testing</strong> complements this by asking a different question: instead of relying purely on historical statistics, what would happen to this portfolio if a scenario resembling 2008 or 1987 recurred? Regulators require major banks to run these tests specifically because standard statistical models, built on relatively calm historical data, tend to understate the risk of genuinely extreme scenarios.</p>

<p>Quantitative researchers spend a substantial share of their time not on finding new patterns, but on testing whether the distributions they're using are still a reasonable fit for current data, and on building in margins of safety for the ways their models are known to be wrong. The discipline is less about prediction and more about disciplined humility in the face of an uncertain system.</p>

<h3>Every Model Is Wrong. Some Are Useful.</h3>
<p>This is a paraphrase of a line associated with the statistician George Box, and it's the single most important idea a young quant can absorb early. A statistical model of markets is not a description of reality; it's a simplified, deliberately approximate stand-in for reality, built to be useful for a specific purpose.</p>

<p>The normal distribution is a wrong but useful model for many purposes, pricing an ordinary option on an ordinary day, say. The t-distribution is a less wrong, still-useful model for estimating tail risk. Neither is "the truth" about markets, because markets don't have a single, fixed, discoverable statistical truth waiting to be found. They're the product of shifting human behavior, changing regulation, evolving technology, and feedback loops between the model and the market itself: when enough people use the same risk model, their coordinated behavior can change the very statistics the model was built on.</p>

<p>This is why the most dangerous phrase in quantitative finance isn't "I don't know." It's "the model says." Every assumption behind a model, that returns are independent, that volatility is stable, that history is a reliable guide to the future, is a simplification that holds until, at some unpredictable moment, it doesn't.</p>

<h3>What This Means If You Want to Do This Seriously</h3>
<p>If you're drawn to quantitative finance because you want to build the model that finally cracks the market, it's worth adjusting that ambition early. The realistic, valuable version of that goal isn't building a system that predicts prices. It's building a clearer, more honest picture of what can and cannot be known, and constructing decisions and safeguards that hold up even when your assumptions turn out to be wrong.</p>

<p>The best quants aren't the ones most confident in their models. They're the ones who understand exactly where their models are likely to fail, and who've built in enough humility and margin for error that the failure doesn't cause a catastrophe. Markets reward rigor. They punish overconfidence, eventually, without much warning.</p>

<p>Start by learning the mathematics properly: probability, statistics, calculus, linear algebra. Then learn to be skeptical of your own results, especially when they look too good. The market has been humbling brilliant people for centuries. There's no reason to expect it will stop.</p>

<h3>Glossary</h3>
<p><strong>Apophenia</strong>: the tendency to perceive meaningful patterns or connections in random or unrelated data.</p>
<p><strong>Fat tails</strong>: a property of a probability distribution where extreme outcomes (far from the average) occur more frequently than a normal distribution would predict.</p>
<p><strong>Log return</strong>: the natural logarithm of the ratio between a price at the end of a period and the price at the start; used in finance because it compounds additively over time.</p>
<p><strong>Normal distribution</strong>: a symmetric, bell-shaped probability distribution defined by its mean and standard deviation, widely used as a baseline model for measurement error and, historically, for financial returns.</p>
<p><strong>Skewness</strong>: a measure of the asymmetry of a probability distribution; financial returns often show negative skewness, meaning large losses are more common or severe than large gains of similar size.</p>
<p><strong>Standard deviation</strong>: a measure of how spread out a set of values is around its average; commonly used in finance as a proxy for volatility or risk.</p>
<p><strong>Student's t-distribution</strong>: a symmetric probability distribution similar in shape to the normal distribution but with heavier tails, controlled by a "degrees of freedom" parameter; often used to model financial returns more realistically than the normal distribution.</p>
<p><strong>Value at Risk (VaR)</strong>: a risk measure estimating the maximum expected loss on a portfolio over a specified time period, at a given confidence level, based on a chosen statistical model.</p>
<p><strong>Volatility</strong>: a measure of how much and how quickly an asset's price fluctuates over time, regardless of direction.</p>
<p><strong>Volatility clustering</strong>: the empirical tendency for periods of high volatility to be followed by more high volatility, and calm periods to be followed by more calm, rather than volatility being random from day to day.</p>

<h3>Further Reading</h3>
<p><strong>"Fooled by Randomness"</strong> by Nassim Nicholas Taleb: an accessible, argumentative look at how randomness and luck are systematically underestimated in finance and life.</p>
<p><strong>"The (Mis)Behavior of Markets"</strong> by Benoit Mandelbrot and Richard Hudson: the mathematician who pioneered fractal geometry applies his ideas to challenge conventional financial theory, including the normal distribution's use in markets.</p>
<p><strong>"A Random Walk Down Wall Street"</strong> by Burton Malkiel: a classic introduction to market efficiency and the difficulty of consistently predicting price movements.</p>
<p><strong>"Against the Gods: The Remarkable Story of Risk"</strong> by Peter Bernstein: a history of how humans developed the mathematical tools to reason about risk and probability.</p>
<p><strong>"Options, Futures, and Other Derivatives"</strong> by John Hull: a standard technical textbook for students who want to go deeper into the mathematics of derivatives pricing and risk models.</p>

<p><em>This article is intended for educational purposes only and does not constitute investment advice or a recommendation to buy or sell any security.</em></p>`,
    featured: false,
  },
  {
    id: 14,
    title: 'The Hidden Mathematics of Human Decisions: Why We Misjudge Risk',
    category: 'Mathematics',
    author: 'The Editor',
    date: 'July 12, 2026',
    readingTime: '4 min read',
    excerpt: 'In the year after 9/11, fear pushed millions of travelers onto the road instead of into the air, and the resulting rise in traffic deaths outnumbered those on the four hijacked planes. Why the human mind handles uncertainty so badly—and what mathematics offers instead.',
    content: `<p>In the year after September 11, 2001, a strange thing happened on American highways. Millions of travelers, spooked by the attacks, chose to drive rather than fly. The psychologist Gerd Gigerenzer later estimated that the resulting rise in road traffic cost roughly 1,600 additional lives—more people than died on the four hijacked planes combined. Flying had not become more dangerous. Driving had always been the riskier choice. What changed was not the math. What changed was fear, and fear did the arithmetic for us, badly.</p>

<p>This is not a story about one bad year. It is a story about how the human mind handles uncertainty, which is to say: not well. We are quick to imagine a plane falling from the sky and slow to picture the thousand ordinary car trips that quietly kill far more people. Vivid scenarios crowd out common ones. A single shark attack reshapes a summer's worth of swimming decisions; a decade of unremarkable commutes changes nothing.</p>

<p>Part of the trouble is that our intuitions evolved to answer a different question than the one modern life keeps asking. Early humans needed to react fast to visible, immediate threats—a rustle in the grass, a stranger at the fire. They did not need to compare the annual mortality rate of two transportation systems. So the brain reaches for shortcuts: if an outcome feels vivid or comes easily to mind, it must be likely. A recent scare looms larger than a decade of statistics. And because emotion is louder than calculation, dread crowds out data every time.</p>

<p>Mathematics offers a corrective, not because it eliminates feeling, but because it gives feeling something to check itself against. The central tool is unglamorous: expected value, the average outcome you'd get if a decision were repeated many times, each result weighted by how likely it is. A lottery ticket that costs two dollars and offers a one-in-ten-million shot at ten million dollars has an expected value of one dollar. You are, on average, giving away money to buy a feeling. That doesn't make playing irrational exactly—people are allowed to pay for a daydream—but it does mean the decision should be understood as buying an experience, not a plausible payout.</p>

<p>Probability distributions extend the same idea further. Instead of asking "will this happen," a distribution asks "across the whole range of things that could happen, how are the odds actually spread out?" Most real risks—market returns, weather, a new drug's side effects—don't have a single answer. They have a shape, with a bulk of likely outcomes and thinning tails of rare ones. Statistical thinking means training your attention on that shape rather than on the one dramatic tail event your mind keeps replaying.</p>

<p>This reframing changes how good decision-makers actually operate. Investors who survive market cycles tend to think in ranges of outcomes and their odds, not in single confident forecasts. A venture capitalist expects most bets to fail and prices that into the portfolio rather than into each individual pitch. Machine learning systems, at bottom, are probability engines: a spam filter or a medical diagnostic tool isn't answering yes-or-no, it's assigning likelihoods and setting a threshold for action. Even mundane choices—whether to buy the extended warranty, how much to worry about a headache—improve once you ask what the range of outcomes looks like and how each one is weighted, instead of asking only what could possibly go wrong.</p>

<p>None of this makes uncertainty disappear. That is the deeper point, and it cuts against the popular hope that enough data or enough modeling will someday remove risk from life. It won't. What mathematics offers instead is a way of standing inside uncertainty without being ruled by it—a set of habits for weighing a hundred futures at once rather than fixating on the one that frightens you most. The world stays unpredictable. What changes is whether you're reacting to it or reasoning through it.</p>`,
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
    name: 'Quantitative Finance',
    icon: '∆',
    description: 'Probability, volatility, and risk models applied to financial markets, and the limits of predicting them.',
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
}

