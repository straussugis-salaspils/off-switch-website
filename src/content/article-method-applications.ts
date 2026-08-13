export type MethodApplicationBlock = {
  kind: "paragraph" | "heading" | "quote";
  text: string;
};

export type ArticleMethodApplication = {
  insertBeforeHeading: string;
  heading: string;
  blocks: MethodApplicationBlock[];
};

const p = (text: string): MethodApplicationBlock => ({ kind: "paragraph", text });
const h = (text: string): MethodApplicationBlock => ({ kind: "heading", text });
const q = (text: string): MethodApplicationBlock => ({ kind: "quote", text });

export const articleMethodApplications: Record<string, ArticleMethodApplication> = {
  "AN-01": {
    insertBeforeHeading: "“No reason” can mean “everything at once”",
    heading: "How I work with this kind of anxiety",
    blocks: [
      p("I do not try to treat ‘anxiety in general’, and I do not ask someone to arrive with a museum-quality catalogue of everything that has ever gone wrong. First, they learn the Off-Switch tool and how to stabilise one reaction while it is starting."),
      p("That does not mean the anxiety is finished. It means the person is no longer drowning in a single undifferentiated background and can see what we are working with next: a memory, a feared future, a body response or fear of the anxiety itself."),
      p("We take the thread that is available now and see what appears beside it. A present-day manager may bring up school. Money fear may uncover old rejection. The connection is not required to win an award for elegant logic."),
      q("First the bulldozer, then the scalpel."),
      h("I test the reaction, not the pleasant conversation"),
      p("‘I feel better now’ is useful information, but it is not the final test. We return to the same memory or imagined future and see whether the old response still starts. Then ordinary life gets a vote."),
      p("If that target no longer activates, that target has changed. It does not prove that every line in the anxious background has disappeared. The next remaining element can now be seen and handled separately."),
      p("If the emotional response has changed but the bill still needs paying, the conversation still needs having or a new skill is missing, further emotional work is not a substitute for action."),
    ],
  },
  "AN-02": {
    insertBeforeHeading: "Relief and completion are different claims",
    heading: "What I do with the remaining background",
    blocks: [
      p("I begin by checking what actually changed. Did the solved problem remove a real present-day demand, reduce one old response, or merely stop occupying the foreground? Relief can be completely real without being the end of the whole pattern."),
      p("We then identify the next specific line that is still active rather than dragging the solved problem back into the room because it already knows where the chairs are."),
      q("The loudest problem can finish first. The nervous system is not obliged to close every neighbouring file at the same time."),
      h("The remaining line needs its own test"),
      p("I work with the next accessible reaction and test it against the same past, future and real-life signals. If something genuinely new has happened, it is treated as new information—not forced into the old explanation for tidiness."),
    ],
  },
  "BO-01": {
    insertBeforeHeading: "Recovery is not tolerating the impossible again",
    heading: "First I separate what the Method is meant to change",
    blocks: [
      p("I separate three layers: the automatic response that keeps the person working, the practical skill needed to set a limit, and the actual structure of the job. Treating all three as ‘burnout’ makes the diagnosis wonderfully compact and the solution almost useless."),
      p("We first work with the fear, guilt or threat attached to stopping. Then the person needs a concrete boundary: a priority decision, changed deadline, request for resources or refusal of work that cannot be done responsibly."),
      q("New energy must not become fresh fuel for the same machine."),
      p("The next demanding period is the test. If the response no longer commands more work and a real boundary exists, but the workload is still impossible, the Method has completed its part. The system—not the person’s nervous system—now needs changing."),
    ],
  },
  "BO-02": {
    insertBeforeHeading: "The next overload tests the boundary",
    heading: "How I work with the order that says ‘you cannot stop’",
    blocks: [
      p("I do not take on the whole of burnout as one heroic lump. I begin with the precise moment in which the laptop was closed and then opened again. That moment shows what stopping means to the person: lost money, punishment, disappointing someone, making a mistake or becoming ‘the one who let everybody down’."),
      p("First the person learns to catch and reduce that response before it purchases another three hours of work. We then work through accessible scenes in which resting, refusing or making an error really did feel dangerous."),
      p("After each layer, I ask them to imagine the same evening again. The task is unfinished. The manager may be displeased. If fear reopens the laptop, the order is still active. If the person can leave the work there and think rather than escape into more work, choice has returned."),
      q("First fear stops being a work instruction. Then the boundary has to appear in the calendar."),
      h("The boundary must survive the next overload"),
      p("Once the response changes, we build the action: name the priority, move the deadline, decline part of the load, request resources or have the conversation. Feeling calm in a session is not the launch party. The next urgent week is the test."),
      p("If the response no longer commands, the skill exists and the workload remains impossible, the problem is external. The tool should not become a sophisticated way of enduring the impossible for longer."),
    ],
  },
  "REL-01": {
    insertBeforeHeading: "The result is not saying no to everyone",
    heading: "How I work with the automatic yes",
    blocks: [
      p("I do not begin with twenty assertive phrases. I begin with one request to which the person wanted to say no, but heard their own ‘yes, of course’ before they had decided."),
      p("They picture the other person’s face, voice and possible displeasure. We locate the smile, softened voice, guilt, fear of conflict or urgent need to smooth everything over. That is the present response we first need to make manageable."),
      p("Then we work with the scenes that actually appear beside it: a parent, punishment by silence, an aggressive partner or an authority around whom being convenient once made sense. I do not assign everyone the same childhood in the interests of administrative efficiency."),
      q("I remove the white flag, not the smile."),
      h("After the response, the person still needs an answer"),
      p("When automatic surrender is gone, we build the skill separately: a short no, another deadline, a compromise or a deliberate yes. The Method does not write the boundary or make the decision for them."),
      p("The real test is the next request. The person does not have to refuse everything. They need enough time to hear themselves, choose and tolerate the other person’s response without automatic capitulation."),
    ],
  },
  "REL-02": {
    insertBeforeHeading: "The result is not indifference",
    heading: "I test the film that silence starts—not silence in general",
    blocks: [
      p("I begin with one unanswered message and the precise film that starts inside: they have lost interest, found someone else, are punishing me, or are about to leave. Silence is the button; the internally completed ending is the response."),
      p("We work with the old scenes and imagined future that feed that film, then show the same silent phone again. Can the person remain with the facts—there is no reply yet—without living through a separation that has not occurred?"),
      q("No reply is information with a blank space. The old response writes a feature-length ending in it."),
      p("Afterwards, the relationship still needs evidence and conversation. Removing an old response does not certify the partner as reliable, nor does it make silence acceptable. It allows today’s relationship to be judged by today’s behaviour."),
    ],
  },
  "REL-03": {
    insertBeforeHeading: "The result is neither mandatory reconciliation nor mandatory separation",
    heading: "The Method must not choose the relationship for the person",
    blocks: [
      p("I first work with the old response through which the present relationship is being viewed. Then the person looks at the same facts again without the previous fear, humiliation or abandonment scene occupying the entire frame."),
      p("Conversation and boundaries create new information. A real problem remains real when the emotional intensity drops; it simply becomes easier to see and address without fleeing or clinging automatically."),
      q("The result is not ‘stay’ or ‘leave’. The result is being able to decide without the old reaction casting the vote first."),
    ],
  },
  "ACT-01": {
    insertBeforeHeading: "Life, not a beautiful rehearsal, tests the result",
    heading: "How I work with freezing in a conversation",
    blocks: [
      p("First I check whether the words exist outside the difficult scene. If they do, the problem is not vocabulary. We recreate the precise moment in which the other person’s tone, authority or displeasure removes access to them."),
      p("The person learns to reduce that response, then we work with the scenes and authority patterns that keep it active. I deliberately bring back the manager, partner or difficult question and see whether the body still moves into silence before the person can choose."),
      q("Confidence advice is not much use when the correct sentence returns twenty minutes after the meeting."),
      h("When the freeze changes, the conversation still needs building"),
      p("We then practise the opening sentence, boundary or request. The final test is not a fluent rehearsal with me. It is whether the words remain available in the next real conversation, while the other person is still inconveniently present."),
    ],
  },
  "ACT-02": {
    insertBeforeHeading: "The result is that the person began",
    heading: "How I work with the response before the first step",
    blocks: [
      p("I reduce the target from ‘procrastination’ to the first observable moment: opening the document, making the call, sending the first line or entering the room. We identify what has already been imagined around that step—failure, criticism, boredom, exposure or endless effort."),
      p("Once the response attached to the first step changes, we build a different future in practical terms: the smallest action, the time and the conditions. A calmer nervous system is useful, but it does not possess a project plan by divine intervention."),
      q("The test is gloriously unromantic: did the person begin?"),
      p("If the response is gone but the skill, structure, information or chosen goal is missing, the work changes category. We build what is absent instead of continuing to hunt for fear because fear used to live there."),
    ],
  },
  "ACT-03": {
    insertBeforeHeading: "The result is more than absence of fear",
    heading: "When the response is nearly gone, I stop searching for it out of habit",
    blocks: [
      p("I deliberately retest the old trigger. If little or nothing starts, I do not keep excavating simply because emotional work is the tool currently in my hand."),
      p("The next question is constructive: can a workable plan appear, does the person have the skill, do the conditions permit the action, and was the goal genuinely chosen? These questions are less dramatic and often more useful."),
      q("A missing plan is not a deeply hidden panic attack wearing office clothes."),
      p("The result is a correct diagnosis of the next task: emotional response, skill, structure, information or choice. Each receives the tool it actually needs."),
    ],
  },
  "GSS-01": {
    insertBeforeHeading: "Removing guilt does not justify the action",
    heading: "How I work with guilt after responsibility has been completed",
    blocks: [
      p("First we establish whether something still needs doing: an apology, repair, repayment, changed behaviour or a difficult conversation. Emotional work must not be used to escape a real responsibility."),
      p("When the action has been completed and punishment continues internally, I treat the remaining guilt as a specific response. We work with the scene, the verdict and any older pattern that says suffering is the receipt proving that responsibility was real."),
      q("Responsibility needs an action. It does not require a life sentence after the action is complete."),
      p("The test is whether the person can remember the event, recognise what was wrong and continue to behave differently without restarting the internal punishment."),
    ],
  },
  "GSS-02": {
    insertBeforeHeading: "The error remains a fact, not a verdict",
    heading: "I test a specific mistake—not the whole person",
    blocks: [
      p("I begin with one error and separate four things: what happened, what can be repaired, what should be learned and the automatic conclusion that the mistake describes the entire person."),
      p("We work with the scene and the older archive it opens. Then I show the same error again. The facts should remain available; the global verdict should not automatically return."),
      q("The cup can have a repaired chip without the mirror declaring the entire owner defective."),
      p("After the past response changes, we build the future: the correction, safeguard, conversation or skill that reduces the chance of repetition. Self-worth is not a quality-control system."),
    ],
  },
  "GSS-03": {
    insertBeforeHeading: "Happiness and output are different measurements",
    heading: "I do not remove goals. I end the permanent audition",
    blocks: [
      p("We choose one moment in which an achievement briefly counted and then became inadequate. I test the moving line itself: what does ‘enough’ threaten to mean—stopping, becoming ordinary, losing love, being exposed or no longer having a defence against worthlessness?"),
      p("The aim is not to make ambition disappear. It is to separate a chosen goal from the automatic requirement to prove the right to exist after every finish line."),
      q("A goal may move because life changed. It should not need wheels because worth is never allowed to arrive."),
      p("The test is whether an achievement can be registered, enjoyed and evaluated before the next goal is chosen—rather than erased before the champagne has had time to become inconveniently warm."),
    ],
  },
  "ANG-01": {
    insertBeforeHeading: "The result begins where choice returns",
    heading: "I work with the button—not with a type of person",
    blocks: [
      p("I choose one person and one precise feature that starts the response: the voice, pause, expression, posture or way of taking space. The category ‘people like that’ is usually too large to be useful."),
      p("We find the scenes that actually appear around that signal and reduce the old response attached to them. Then I show several different people who share the feature and check whether they still receive the same historical mask."),
      q("Different people may press the same old button. That does not make them the same person."),
      p("When the automatic explosion is gone, disagreement remains available. The person can decide that someone is rude, unsafe or simply exhausting without the reaction making the decision before the evidence arrives."),
    ],
  },
  "INT-01": {
    insertBeforeHeading: "The result is not having to stay; it is no longer having to run",
    heading: "How I work with the response to real closeness",
    blocks: [
      p("I do not work with ‘intimacy’ as an abstract virtue. We choose one moment when closeness became real: an invitation, a kind message, a plan for the future or the simple fact that the other person stayed."),
      p("We identify what the body predicts at that threshold and work with the earlier pain and imagined future that join it. Then I bring back the same scene and see whether retreat still feels compulsory."),
      q("The Method does not issue a relationship verdict. It removes the emergency exit sign where no emergency has yet appeared."),
      p("After the response changes, the person still decides whether the relationship is right. The result is enough internal space to move closer, slow down or leave for present-day reasons."),
    ],
  },
  "MEM-01": {
    insertBeforeHeading: "The next real mess will show more than a good conversation",
    heading: "How I work with a response that is larger than today’s event",
    blocks: [
      p("I do not argue that the present event is harmless. I measure its facts and the size of the response separately, then choose one scene that appears to be adding more weight than today can account for."),
      p("After working with that scene, I return to the same current mess, tone or mistake. The present facts should still be visible. What changes is the extra historical force that made them occupy the whole room."),
      q("A smaller response does not declare today’s behaviour acceptable. It makes today’s behaviour today-sized again."),
      p("The final test comes when a similar event occurs in life. Can the person respond to what happened, set a boundary or repair the problem without the older scene taking command?"),
    ],
  },
  "MEM-02": {
    insertBeforeHeading: "One neutral scene does not finish the whole chain",
    heading: "I record the next scene without abandoning the current one",
    blocks: [
      p("When another memory appears, I note it and return to the scene we are actually working with. Following every new association immediately creates an impressive tour of the archive and very little completed work."),
      p("Once the current target is neutral, we take the next relevant scene and repeat the test. If nothing else appears, I do not invent a causal biography to make the process look more profound."),
      q("Pull the thread, write down what emerges, finish the stitch in your hand."),
      p("The result is not one calm memory. It is a sequence in which each active scene is addressed and retested without turning the chain into a story that must be accepted on faith."),
    ],
  },
  "BO-03": {
    insertBeforeHeading: "Sometimes the job needs changing—not more work on yourself",
    heading: "Internal work must be allowed to finish here",
    blocks: [
      p("I first check what the person brings into the job: old authority fear, compulsory over-responsibility, difficulty stopping or a response shaped by previous managers. We work with what is genuinely theirs."),
      p("Then comes arithmetic: hours, staff, deadlines, role clarity, compensation, values and the organisation’s response to reasonable boundaries. Calm does not make an impossible system possible; it merely improves the measurement."),
      q("The Method should not become a programme for adapting elegant nervous systems to bad management."),
      p("If the internal response has changed, the person has the relevant skills and the system still demands the impossible, the next action is structural: renegotiate, escalate, redesign the role or leave without confusing departure with escape."),
    ],
  },
};

export function getArticleMethodApplication(articleId: string) {
  return articleMethodApplications[articleId];
}
