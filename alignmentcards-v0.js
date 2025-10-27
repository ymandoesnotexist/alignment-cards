export const categories = [
  {
    "code": "AP",
    "name": "Alignment Principles",
    "pathology": "normative void",
    "color": "#E6FFE9",
    "description": "Alignment principles are contestable, general-purpose, broadly recognized ethical or social or normative commitments that can serve as warrants for recommending or evaluating an agent's course of action in contexts where alignment and cooperation with others matters."
  }
];

export const cards = [
  {
    "category": "AP",
    "name": "Beneficence",
    "definition": "Act to promote the well-being of others.",
    "human": "Seeking to improve others' conditions, not just avoid harm.",
    "organizational": "Pursuing mission outcomes that serve societal good.",
    "professional": "Keeping public safety and welfare in sight even while working primarily for the client.",
    "machine": "Designing systems that anticipate and promote human flourishing.",
    "failureModes": {
      "human": "A person drives in a manner that causes traffic backups for others.",
      "organizational": "The classic movie plot where a rapacious billionaire threatens civilization to enrich his company.",
      "professional": "An expert who disregards public interest, acting as if the consequences of what they help build are other people's problems.",
      "machine": "The machine consumes all the world's resources to create as many paperclips as it can."
    }
  },
  {
    "category": "AP",
    "name": "Non‑Maleficence",
    "definition": "Avoid causing harm to others.",
    "human": "Taking care to ensure your actions do not harm people or the environment.",
    "organizational": "Implementing policies and practices that avoid harming stakeholders or creating negative externalities.",
    "professional": "Acting with due diligence to prevent malpractice or harm to clients and society.",
    "machine": "Building systems that minimize risks and prevent harmful outcomes.",
    "failureModes": {
      "human": "Carelessly injuring someone through reckless behavior.",
      "organizational": "A company pollutes a river to cut costs, harming local communities.",
      "professional": "A surgeon neglects safety protocols, causing patient harm.",
      "machine": "An autonomous vehicle's software causes accidents due to poor safety design."
    }
  },
  {
    "category": "AP",
    "name": "Autonomy",
    "definition": "Respect the ability of agents to make their own informed choices.",
    "human": "Recognizing others' rights to make their own decisions and not imposing your will.",
    "organizational": "Empowering employees and stakeholders to have a voice in decisions that affect them.",
    "professional": "Honoring clients’ informed consent and giving them control over their data and decisions.",
    "machine": "Designing systems that respect user preferences and avoid manipulation.",
    "failureModes": {
      "human": "Coercing someone into a decision against their will.",
      "organizational": "Micromanaging employees so they have no autonomy.",
      "professional": "An expert overriding a client’s decisions without consent.",
      "machine": "A recommender system that manipulates users into actions they don’t want."
    }
  },
  {
    "category": "AP",
    "name": "Justice",
    "definition": "Treat others fairly and equitably.",
    "human": "Treating people equitably and without discrimination.",
    "organizational": "Ensuring policies and resource allocations are fair and do not disadvantage groups.",
    "professional": "Delivering services impartially regardless of clients' background or status.",
    "machine": "Designing algorithms that are fair and unbiased across different groups.",
    "failureModes": {
      "human": "A person discriminates against others based on race or gender.",
      "organizational": "A company pays employees differently for the same work based on discriminatory factors.",
      "professional": "An expert favours certain clients due to bias.",
      "machine": "A hiring algorithm systematically ranks candidates from certain backgrounds lower."
    }
  },
  {
    "category": "AP",
    "name": "Accountability",
    "definition": "Be responsible for actions and decisions.",
    "human": "Owning up to mistakes and accepting consequences.",
    "organizational": "Having clear structures for responsibility and auditing actions.",
    "professional": "Adhering to codes of conduct and taking responsibility for professional work.",
    "machine": "Ensuring that system outputs are traceable and that there is oversight over autonomous decisions.",
    "failureModes": {
      "human": "Blaming others instead of accepting responsibility for harm caused.",
      "organizational": "A corporation hides behind complex structures to avoid responsibility for wrongdoing.",
      "professional": "An expert evades liability for flawed advice.",
      "machine": "An opaque AI system makes harmful decisions with no one accountable."
    }
  },
  {
    "category": "AP",
    "name": "Transparency",
    "definition": "Operate openly and be transparent about actions and reasoning.",
    "human": "Being honest and clear about intentions and reasons for actions.",
    "organizational": "Communicating decisions and processes openly with stakeholders.",
    "professional": "Explaining methods and reasoning to clients and peers.",
    "machine": "Providing interpretable models and explanations for system outputs.",
    "failureModes": {
      "human": "Deceiving others or hiding information to manipulate outcomes.",
      "organizational": "Keeping critical business decisions secret from affected stakeholders.",
      "professional": "An expert uses jargon and obscurity to avoid scrutiny.",
      "machine": "A black-box AI whose decisions cannot be understood or challenged."
    }
  }
];
