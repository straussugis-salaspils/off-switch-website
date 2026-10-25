export type ArticleBlock =
  | { type: "heading"; id: string; text: string }
  | { type: "paragraph"; text: string; link?: { href: string; text: string } }
  | { type: "quote"; text: string }
  | { type: "list"; items: readonly string[] }
  | { type: "flow"; items: readonly string[] };

export interface PilotArticle {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  standfirst: string;
  readingTime: string;
  seriesPosition: number;
  primaryQuery: string;
  blocks: readonly ArticleBlock[];
}

export const methodArticles: readonly PilotArticle[] = [
  {
    slug: "why-understanding-does-not-stop-the-reaction",
    title: "Why you understand the pattern — and still react",
    seoTitle: "Why Understanding Does Not Stop an Automatic Reaction",
    description:
      "Why insight into an emotional trigger may not stop the automatic reaction, and how to tell whether the response itself has changed.",
    standfirst:
      "Insight can give you an excellent map of the problem. The difficulty is that an automatic response may arrive before you have time to unfold it.",
    readingTime: "11 min read",
    seriesPosition: 1,
    primaryQuery: "why emotional triggers keep coming back",
    blocks: [
      {
        type: "heading",
        id: "you-understand",
        text: "You understand the pattern. Your response has other plans",
      },
      {
        type: "paragraph",
        text: "You can spend years understanding why conflict frightens you. You may know how each parent shaped the pattern, why authority makes you feel smaller, why certain relationships feel familiar and why pleasing everyone became a full-time position you never applied for. The explanation may be both accurate and deeply useful.",
      },
      {
        type: "paragraph",
        text: "Then a manager raises their voice. Your chest tightens, the words vanish and you want to agree, justify yourself, smile or leave. Twenty minutes later, the perfect reply arrives with its customary impeccable timing. You wonder why the same thing happened again when you understand it so well.",
      },
      {
        type: "paragraph",
        text: "Because insight and an automatic reaction are different operations. Your understanding can be entirely genuine while the response begins before the part of you that can use it has come online.",
      },
      {
        type: "heading",
        id: "map-not-switch",
        text: "A map can orient you. It cannot switch off the response",
      },
      {
        type: "paragraph",
        text: "It is reasonable to expect that once you know where a reaction came from, it should disappear. Sometimes it does soften. Often it does not. Insight can replace self-blame with context, reveal a pattern and give you language for what happens. All of that matters. But describing a mechanism, however elegantly, is not the same as changing it.",
      },
      {
        type: "paragraph",
        text: "You may remind yourself that your manager is not your father, your partner is not your mother and you are no longer the child who had no choice. Every sentence may be true. Yet a look, a pause, a tone of voice, a closed door or an image of the future can start the old physical response before your reasoning has found its notes.",
      },
      {
        type: "quote",
        text: "You have not failed to understand. You are trying to answer an automatic response with an argument.",
      },
      {
        type: "heading",
        id: "button",
        text: "The present situation may be the button, not the whole mechanism",
      },
      {
        type: "paragraph",
        text: "A manager sounds sharper than usual. A partner does not answer a message. A client sends a difficult email. You picture having no money six months from now. The present event may be real and may require a real response. At the same time, something in it can match an older pattern closely enough to activate the old response.",
      },
      {
        type: "flow",
        items: [
          "signal now",
          "old meaning",
          "physical response",
          "habitual action",
          "the same problem again",
        ],
      },
      {
        type: "paragraph",
        text: "The signal may be a voice. The older meaning may be “I am about to be destroyed,” “I cannot disagree,” or “If they do not like me, I will be left.” The response may be heat, pressure, a blank mind, anger or freezing. The familiar action follows: agree, attack, explain, withdraw, control, or smile while everything inside says no.",
      },
      {
        type: "paragraph",
        text: "This does not mean that every problem lives inside you. No technique converts a bad manager into a good one. Sometimes the job, relationship or wider structure needs to change. The useful question is whether you can assess that reality freely, or whether an older response has already taken over the decision.",
      },
      {
        type: "heading",
        id: "memory",
        text: "Memory does not always arrive as a story",
      },
      {
        type: "paragraph",
        text: "Memory rarely arrives with a date, a title card and a complete scene. It may appear as the urge to disappear, the need to be liked, anger followed by shame, an inability to say a simple no, or the feeling of shrinking beside someone with authority. What returns is not always a narrative. Often it is a position, a sensation or an impulse.",
      },
      {
        type: "paragraph",
        text: "Talking about the past can be valuable. It can name what happened, put responsibility where it belongs and reduce misplaced self-blame. But reconstructing the same images, voices and sensations again and again can become another rehearsal of the response rather than a change in it.",
      },
      {
        type: "quote",
        text: "The past belongs in the past. It should not keep setting your body's daily agenda.",
      },
      {
        type: "heading",
        id: "returned",
        text: "Sometimes the reaction did not return. The background never left",
      },
      {
        type: "paragraph",
        text: "It can feel as though anxiety disappeared and then returned. But several pressures may have been active at once: a report, money, work, a relationship and the future. Finishing the report removes the loudest item and brings relief. It does not tell us whether the rest of the background has changed.",
      },
      {
        type: "paragraph",
        text: "That is why one good day is welcome, but it is not the endpoint. First you learn to interrupt individual waves. Then the work turns to what keeps producing them. Change is tested against the same image, memory or real situation, not inferred from a temporary absence of pressure.",
      },
      {
        type: "heading",
        id: "one-cause",
        text: "You do not need to find one perfect root cause",
      },
      {
        type: "paragraph",
        text: "It is tempting to search for the one decisive event that explains everything. Sometimes there is a powerful central episode. Even then, later experiences may join it: fear of the reaction itself, avoidance, a second failure or an image of the next catastrophe. There may be several things to work with, not one perfect cause.",
      },
      {
        type: "paragraph",
        text: "I do not begin by treating the biography as a mystery that must be solved before anything can change. We work systematically with accessible memories and reactions first. What still starts the response then becomes clearer, allowing more precise work.",
      },
      {
        type: "heading",
        id: "sequence",
        text: "First stabilize. Then address what keeps the reaction active",
      },
      {
        type: "paragraph",
        text: "When someone arrives with anxiety, poor sleep, pressure at work, fear about money and tension at home, I do not select the most dramatic story in the first minute. At that point, there may be no useful first target. There is a first stage: learn to manage the state well enough that the heaviest material no longer controls the process.",
      },
      {
        type: "list",
        items: [
          "Notice the reaction while it is happening.",
          "Reduce it instead of debating with it.",
          "Repeat this when several reactions appear together.",
          "Move to heavier material only when you can come back out of it.",
          "Test what remains in imagination and in real life.",
        ],
      },
      {
        type: "heading",
        id: "skill",
        text: "Then we can distinguish reaction, skill and structure",
      },
      {
        type: "paragraph",
        text: "If you can calmly plan a conversation but freeze when the person is in front of you, a reaction is blocking access to the skill. If you do not know what to say even when calm, the skill may need to be learned. If the reaction has changed and the workplace remains destructive, the structure may need to change.",
      },
      {
        type: "paragraph",
        text: "Changing the old response does not automatically build a new life. It creates enough room to see what the next task actually is. That is how I assess change: not by whether the explanation has become more elegant, but by whether the same signal still produces the same automatic answer.",
      },
    ],
  },
  {
    slug: "why-i-do-not-start-with-your-biggest-problem",
    title: "Why I do not begin with the biggest problem",
    seoTitle: "Why Stabilization Comes Before Deeper Emotional Work",
    description:
      "Why Off-Switch work begins with stabilization and a practical tool before addressing the hardest memory or presenting problem.",
    standfirst:
      "The problem that brought you here matters. But the most useful first step is often to build enough control that the problem no longer dictates the whole process.",
    readingTime: "10 min read",
    seriesPosition: 2,
    primaryQuery: "why stabilization comes before trauma work",
    blocks: [
      {
        type: "heading",
        id: "presenting-problem",
        text: "The problem that brought you here matters. It is not always where we begin",
      },
      {
        type: "paragraph",
        text: "You may arrive because of panic on the road, conflict with a manager, a relationship you cannot leave or anxiety that has occupied every morning for years. Naturally, you want to start with the thing that hurts most. You came for help with that problem, not a guided tour of everything adjacent to it.",
      },
      {
        type: "paragraph",
        text: "I take that problem seriously. But if you cannot yet reduce a smaller reaction on your own, beginning with the hardest memory can leave you overwhelmed before you have learned how to steady yourself. The first step is to give you that ability.",
      },
      {
        type: "quote",
        text: "I do not begin with the biggest problem. I begin by making sure you have a way to stop drowning.",
      },
      {
        type: "heading",
        id: "order",
        text: "Sequence is part of the method",
      },
      {
        type: "paragraph",
        text: "In emergency medicine, stabilization comes before an operation. The comparison has limits, but the sequence is useful: make the current state manageable, work with what produces it, then rebuild function. Skipping the first stage does not make the work deeper. Depth is not measured by how quickly a room becomes dramatic. It simply makes the process less controllable.",
      },
      {
        type: "flow",
        items: ["learn to steady yourself", "work with connected memories and reactions", "test what changed", "build what comes next"],
      },
      {
        type: "paragraph",
        text: "The first stage is not a promise that an entire pattern will disappear in one exercise. A reaction may settle and return an hour later. The early aim is to recognize it, reduce it and regain the ability to think and act. Repetition turns a success achieved in the session into a skill that is available elsewhere.",
      },
      {
        type: "heading",
        id: "available-material",
        text: "Begin with material you can enter and leave",
      },
      {
        type: "paragraph",
        text: "Learning a technique during a calm conversation proves little on its own. The next step is to apply it to accessible material: significant enough to produce a clear response, but not so overwhelming that you lose the ability to follow the process. Then we check the same target again.",
      },
      {
        type: "list",
        items: [
          "What exactly starts the reaction?",
          "How strong is it before the work?",
          "Can you reduce it without someone else taking over?",
          "What remains when the target is checked again?",
          "Does the change survive contact with ordinary life?",
        ],
      },
      {
        type: "paragraph",
        text: "Once you can work with several reactions in sequence, we can move into heavier memories or future images. The difficult material is not being avoided. It simply no longer has to be the first test of a skill that is still under construction.",
      },
      {
        type: "heading",
        id: "warehouse",
        text: "The loudest problem may sit within a broader pattern",
      },
      {
        type: "paragraph",
        text: "A panic attack may follow months of overload. Conflict with a manager may activate older responses to authority. Fear about one journey may now include fear of another attack, embarrassment about the last one and avoidance that has developed around both. Treating the presenting problem as an isolated object can miss the load that continues to feed it.",
      },
      {
        type: "paragraph",
        text: "This is why I often work broadly before working narrowly. We reduce the accessible background, then return to the original target. Sometimes it has already lost much of its force; sometimes it remains clearly visible. Either result is useful because the next step can be based on what happened, rather than on an attractive theory about why it should have happened.",
      },
      {
        type: "heading",
        id: "measurement",
        text: "A good conversation is valuable. It is not the measurement",
      },
      {
        type: "paragraph",
        text: "You can finish a session feeling understood, hopeful and calm. That may be valuable, but it does not yet show that the response itself has changed. We check the target again: the same conversation, road, face or future event. Later, where appropriate, you meet the real situation.",
      },
      {
        type: "paragraph",
        text: "If the intensity does not change, we do not award the conversation points for elegance and call it progress. We change the entry. The target may be too large; the relevant detail may be different; or you may be working with fear when the active element is shame, anger, a physical sensation or the meaning attached to the event.",
      },
      {
        type: "quote",
        text: "The result is not how convincing the session felt. It is what happens when the same material is tested again.",
      },
      {
        type: "heading",
        id: "reaction-skill-structure",
        text: "When the reaction changes, a different problem may come into view",
      },
      {
        type: "paragraph",
        text: "You may stop freezing around a manager and discover that you still do not know how to negotiate. You may lose the fear of setting a boundary and see that the relationship remains unequal. You may reduce the emotional charge around work and find that the workload itself is unsustainable.",
      },
      {
        type: "paragraph",
        text: "That makes the next task clearer. A reaction, a missing skill and an impossible workload need different answers. Emotional work should not be used to help someone tolerate a reality that requires a decision. Equally, a skill is of little use if access to it disappears each time the old response starts.",
      },
      {
        type: "heading",
        id: "main-order",
        text: "The biggest problem does not have to choose the order",
      },
      {
        type: "paragraph",
        text: "You may come to remove one problem. First, you need a tool you can use with that problem and with the reactions connected to it. Then we address what keeps pulling you back. From there, we can decide what needs to be learned, changed or built.",
      },
    ],
  },
  {
    slug: "why-the-main-work-happens-between-sessions",
    title: "Why the main work happens between sessions",
    seoTitle: "Why Practice Between Sessions Matters",
    description:
      "Why sessions provide structure and correction while the main Off-Switch practice happens where reactions occur: in everyday life.",
    standfirst:
      "Life does not wait for the next Zoom call. The method is designed for you to use the tool where the reaction actually happens, and to need the practitioner less over time.",
    readingTime: "9 min read",
    seriesPosition: 3,
    primaryQuery: "why practice between sessions matters",
    blocks: [
      {
        type: "heading",
        id: "life",
        text: "Life does not keep to the session schedule",
      },
      {
        type: "paragraph",
        text: "We meet on Zoom, whether you are in the next city or on the other side of the world. It is understandable to hope one meeting will remove what has been troubling you for years. The difficulty is that life has not agreed to observe office hours.",
      },
      {
        type: "paragraph",
        text: "It arrives in the car when panic starts, in a conversation where the prepared words disappear, and at night when the mind predicts that there will be no money and no way out. A session can set a great deal in motion. The rest of the week is where that work meets real life.",
      },
      {
        type: "heading",
        id: "tool",
        text: "The first meeting provides a tool, not a complete answer",
      },
      {
        type: "paragraph",
        text: "At the beginning, we do not attempt to resolve anxiety, sleep, work, money and family in one sitting. The first task is more specific: notice the state that has arrived and reduce it enough to regain choice.",
      },
      {
        type: "paragraph",
        text: "The reaction may return later. If it does, you use the tool again. This is not the end of the process. It is the first point at which you are no longer entirely helpless inside the response. You are beginning to regain the steering wheel.",
      },
      {
        type: "quote",
        text: "The session provides the structure. Practice between sessions provides the volume.",
      },
      {
        type: "heading",
        id: "one-success",
        text: "One successful attempt is a beginning, not proof",
      },
      {
        type: "paragraph",
        text: "Most people can follow a technique once when the room is calm, there is time and I can correct the process. The real test comes when several things activate together: fear about the future, anger at yourself, an old memory, a racing heart and the thought that something is fundamentally wrong.",
      },
      {
        type: "paragraph",
        text: "What appears to be one enormous crisis can be several reactions running in parallel. The practical skill is to work with the first, then the second, then the third. Sometimes there are three; sometimes thirteen. The nervous system is not always committed to brevity, but the sequence is still finite. Once you can work through it, heavier material becomes more manageable without making you dependent on my presence.",
      },
      {
        type: "heading",
        id: "home-practice",
        text: "Practice is not an appendix to the programme",
      },
      {
        type: "paragraph",
        text: "I teach the sequence, observe where you get stuck and help adjust the next step. But you work with the memory at home, interrupt the response during the real conversation and take the new action in daily life. Allow 30–60 minutes a day for independent practice.",
      },
      {
        type: "paragraph",
        text: "This is not homework included to make the programme look impressively substantial. A weekly meeting cannot do all the work accumulated across twenty, thirty or forty years. The meeting protects the order and quality of the work; consistent self-practice makes the necessary volume possible.",
      },
      {
        type: "paragraph",
        text: "See the individual private-work case:",
        link: {
          href: "/evidence/complex-ptsd-burnout",
          text: "Complex PTSD and burnout: changes in work, sleep and family life",
        },
      },
      {
        type: "heading",
        id: "biography",
        text: "A complete biography is not required",
      },
      {
        type: "paragraph",
        text: "Working with the past does not require retelling your full story at every meeting. The working unit is smaller: a particular memory or response, its current intensity, the application of the tool and a second check. If it changes, we continue. If it does not, we examine where the process is stuck and change the entry.",
      },
      {
        type: "paragraph",
        text: "This is also why group participants do not have to disclose their whole lives. One person can ask about the sequence and another can recognize the same structure in a different manager, parent, city or event. The work is not a competition for the most dramatic story. It is the practical task of identifying a response and knowing what to do with it.",
      },
      {
        type: "heading",
        id: "did-not-work",
        text: "“It did not work” gives us useful information",
      },
      {
        type: "paragraph",
        text: "When you return and say that you tried but nothing changed, that is useful information. The target may have been too heavy. A new event may have added another response. You may believe that the conversation is the trigger when the active element is a look, a tone or a bodily sensation. Or the reaction may already be lower, with a missing skill now accounting for what remains.",
      },
      {
        type: "paragraph",
        text: "My role is not to answer every difficulty with encouragement. It is to locate the point at which the process failed and redesign the next step. The previous session is tested by what you could do afterwards, not by how polished our closing conversation sounded.",
      },
      {
        type: "heading",
        id: "change-entry",
        text: "If the target does not shift, change the entry",
      },
      {
        type: "paragraph",
        text: "Repeating the same move indefinitely is not persistence; it is repetition with excellent attendance. If a target has not shifted after several careful passes, we change the way in. We may examine the protective intention behind future anxiety, the meaning attached to the event, a neighbouring scene, a bodily sensation or one part of an episode rather than the entire film.",
      },
      {
        type: "paragraph",
        text: "Then we return to the original target and test it again. We do not need an elegant theory about why it resisted. We need an entry that produces a measurable change. If the target has not moved, we have not found that entry yet.",
      },
      {
        type: "heading",
        id: "real-life",
        text: "New behavior has to work outside the session",
      },
      {
        type: "paragraph",
        text: "You can decide in a session that you will say no to your manager. First, we imagine the future conversation and notice what happens. If fear or physical tension appears, there is still material to address. Then you take the action in real life: set the boundary, have the conversation or remain present where you used to leave.",
      },
      {
        type: "paragraph",
        text: "At the next meeting, we examine what happened. Success means the new behavior exists beyond the plan. Difficulty shows us where the plan is still weak. It is not a personal verdict; it is a test result.",
      },
      {
        type: "heading",
        id: "less-needed",
        text: "Good work should make me less necessary",
      },
      {
        type: "paragraph",
        text: "In the group, we meet once a week for twelve weeks, for 90–150 minutes each time. Between meetings, you practise using the tool without me beside you. The aim is not to live from session to session, waiting for the next meeting before you can act.",
      },
      {
        type: "paragraph",
        text: "I can help during a crisis, and sometimes that is necessary. But I do not want to become the permanent button you have to press whenever life becomes difficult. The aim is for you to have your own button because it is your life, not mine. That is when the work has left the session and entered the world where it matters.",
      },
    ],
  },
] as const;

export function getPilotArticle(slug: string) {
  return methodArticles.find((article) => article.slug === slug);
}
