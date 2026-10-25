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
const q = (text: string): MethodApplicationBlock => ({ kind: "quote", text });

export const articleMethodApplications: Record<string, ArticleMethodApplication> = {
  "AN-01": {
    insertBeforeHeading: "Understanding the parts is not the result",
    heading: "How I work with this kind of anxiety",
    blocks: [
      p("First, the person learns the Off-Switch tool: how to notice and reduce a reaction while it is starting. They need a way to regain control before difficult memories set the pace."),
      p("Then we work gradually with what is accessible: a memory, a feared future, a body response or fear of the anxiety itself. We follow the connections that actually appear, rather than deciding in advance which story must explain everything."),
      p("After each step, we return to the same memory or imagined future and check whether the old response still starts. Then we check what happens in ordinary life. A changed response is a result for that particular element, not proof that the whole anxious background has gone."),
    ],
  },
  "AN-02": {
    insertBeforeHeading: "Relief and completion are different claims",
    heading: "What I do with the remaining background",
    blocks: [
      p("Once we have identified what is still active, we work with that specific reaction—not with the solved problem simply because it is already familiar."),
      p("We test the change against the same memory, imagined future and real-life signals. If something genuinely new has happened, we treat it as new information rather than forcing it into the old explanation."),
    ],
  },
  "BO-01": {
    insertBeforeHeading: "New energy can rebuild the same system",
    heading: "I separate response, skill and the structure of work",
    blocks: [
      p("Suppose fear of the manager makes someone accept everything. We first work with that response: the fear, guilt or threat attached to stopping."),
      p("After it changes, the person may discover they do not know how to discuss workload. That is a skill. The next step is a concrete boundary: a priority decision, changed deadline, request for resources or refusal of work that cannot be done responsibly."),
      p("They may then have a calm, competent conversation and hear, ‘No staff. No delegation. Do all of it.’ That is information about the job, not another emotional response to remove."),
      p("The next demanding period is the test. If the response no longer commands more work and a real boundary exists, but the workload is still impossible, the Method has completed its part. The system—not the person’s nervous system—now needs changing."),
    ],
  },
  "BO-02": {
    insertBeforeHeading: "Put the boundary into your workload, calendar and conversations",
    heading: "How I work with the order that says ‘you cannot stop’",
    blocks: [
      p("We start at the moment the laptop closes and then opens again. What does stopping mean to this person: lost money, punishment, a mistake or becoming ‘the one who let everybody down’?"),
      p("First, they learn to catch and reduce that response. We then work through accessible scenes in which resting, refusing or making an error really did feel dangerous."),
      p("After each layer, we return to the same imagined evening. The task is still unfinished. The manager may still be displeased. Can the person leave the work there, assess the risk and make a plan, or does fear still send them straight back to the laptop? Responsibility remains; it no longer has to come with the same automatic order."),
    ],
  },
  "REL-01": {
    insertBeforeHeading: "A new conversation still needs to be learned",
    heading: "How I work with the automatic yes",
    blocks: [
      p("We start with one real request: a moment when the person wanted to refuse but heard their own ‘yes, of course’ instead. They picture the other person’s face, hear the voice and notice what happens before they answer."),
      p("Does the body tighten? Does the voice disappear? Does a smile arrive along with an urgent need to keep the other person happy? We first work on making that response manageable, rather than arguing with it."),
      p("Then we work with the emotional charge of the scenes connected to it: a parent, punishment by silence, an aggressive partner or an authority around whom being convenient once made sense. There may be one early scene or a chain of later moments. I do not assign everyone the same childhood in the interests of administrative efficiency."),
      p("Afterwards, we return to the same request, face and possible displeasure. If the body still tightens or agreement still feels compulsory, there is more to work with. A calmer account of the past is not enough if today’s request produces the same yes."),
      q("I remove the white flag, not the smile."),
    ],
  },
  "REL-02": {
    insertBeforeHeading: "Removing the old response does not make the partner good",
    heading: "I test the film that silence starts—not silence in general",
    blocks: [
      p("Feeling better during a conversation is not enough. After working with the old scenes and feared future, we bring back the same silent phone. Does the old memory, physical response or fear of abandonment return? Is there still an urgent need to send another message or disappear first?"),
      p("Can the person stay with the fact—there is no reply yet—without living through a separation that has not occurred?"),
      p("When that imagined pause no longer starts the old film, ordinary life provides the next test. People close to us will still occasionally answer late. The aim is not a partner who supplies round-the-clock proof of safety. It is a pause that no longer governs the person in place of facts."),
    ],
  },
  "ACT-01": {
    insertBeforeHeading: "When freezing leaves, the conversation still needs building",
    heading: "How I work with freezing in a conversation",
    blocks: [
      p("The person has usually tried preparing, rehearsing and promising not to freeze. We return to the precise moment when the other person’s tone, authority or displeasure makes the words disappear."),
      p("First, they learn to reduce the present response. Then we work with accessible scenes and authority patterns that keep it active, rating the response and testing the same conversation again."),
      p("I deliberately bring back the manager, partner or difficult question. If the body still moves into silence before the person can choose, another memory, tone, look or part of the situation may need attention. We do not have to invent a perfect causal history in advance; testing shows what remains."),
    ],
  },
  "ACT-03": {
    insertBeforeHeading: "Build the plan, skills or structure needed for the next action",
    heading: "When the response is nearly gone, I stop searching for it out of habit",
    blocks: [
      p("I deliberately retest the old trigger. If little or nothing starts, I do not keep excavating simply because emotional work is the tool currently in my hand."),
      q("A missing plan is not a deeply hidden panic attack wearing office clothes."),
    ],
  },
  "GSS-01": {
    insertBeforeHeading: "Removing guilt does not justify the action",
    heading: "How I work with guilt after responsibility has been completed",
    blocks: [
      p("Once the necessary action is complete, we take one scene rather than ‘I am guilty of everything’. We work with the remaining response, the verdict and any older pattern that makes suffering feel like proof of responsibility."),
      p("Then we deliberately return to the same episode. Can the person remember it and recognise what was wrong without restarting the punishment? If guilt remains, we check for another scene, accusation or an action that still needs doing."),
      p("If the memory becomes neutral, we test a future error. Can the person admit, repair and learn without collapsing into self-punishment? A real mistake or apology then shows whether that difference holds outside the session."),
    ],
  },
  "GSS-02": {
    insertBeforeHeading: "Remove the past, then create the future",
    heading: "I test a specific mistake—not the whole person",
    blocks: [
      p("‘Low self-esteem’ is too broad to test. I begin with the moment the person noticed one error, separating what happened, what can be repaired, what should be learned and the automatic conclusion that the mistake describes the entire person."),
      p("We work with that scene and the older memories it brings up. Then I show the same error again. The facts should remain available; the verdict ‘I am bad’ should not automatically return."),
      p("One neutral scene is not every part of self-worth. We continue where a specific response can still be reproduced, then turn to what the person needs to do differently next time."),
    ],
  },
  "GSS-03": {
    insertBeforeHeading: "Happiness and output are different measurements",
    heading: "I do not remove goals. I end the permanent audition",
    blocks: [
      p("We choose one moment in which an achievement briefly counted and then became inadequate. I test the moving line itself: what does ‘enough’ threaten to mean—stopping, becoming ordinary, losing love, being exposed or no longer having a defence against worthlessness?"),
      p("We work with the specific earlier scenes and responses behind that condition, rather than arguing abstractly that the person is already good enough."),
      p("Then we test whether the achievement can count: can it be recognised, enjoyed and evaluated before the next goal is chosen? The aim is not to remove ambition, but to stop each result becoming another test of whether the person deserves self-respect."),
      p("Does the desire to grow remain when that pressure is quieter? A goal that disappears may have existed mainly as proof. One that still matters can be chosen for its own sake."),
    ],
  },
  "ANG-01": {
    insertBeforeHeading: "No automatic explosion does not mean agreement",
    heading: "I work with the button—not with a type of person",
    blocks: [
      p("‘Controlling people irritate me’ does not justify assigning a controlling parent by return post. I choose one person and one precise feature that starts the response: the voice, pause, expression, posture or way of taking space. The category ‘people like that’ is usually too large to be useful."),
      p("We find the scenes that actually appear around that signal and reduce the old response attached to them. Then I show several different people who share the feature and check whether they still receive the same historical mask."),
      q("Different people may press the same old button. That does not make them the same person."),
    ],
  },
  "INT-01": {
    insertBeforeHeading: "The result is not having to stay; it is no longer having to run",
    heading: "How I work with the response to real closeness",
    blocks: [
      p("‘I fear intimacy’ is too broad to test at once. We choose one moment when closeness became real: an invitation, a kind message, a plan for the future or the simple fact that the other person stayed. What happened in the body, desire, voice and decision?"),
      p("We work with the earlier pain and the imagined future that appear around that moment, testing them separately. Then I bring back the same scene and see whether retreat still feels compulsory."),
      p("The person looks again at the actual relationship. The next time closeness becomes real shows whether the change holds beyond our conversation."),
    ],
  },
  "MEM-01": {
    insertBeforeHeading: "Less old charge does not make today's behaviour acceptable",
    heading: "How I work with a response that is larger than today’s event",
    blocks: [
      p("We take the actual scene: this room, these objects, this moment of entering. What happens in the body and emotion? What starts it—the image, noise, tone, loss of control or something else? I do not begin by deciding which childhood trauma must explain shouting at backpacks."),
      p("We work with accessible memories connected with that response, then return to the same mess, tone or mistake. The present facts should remain visible without the extra force of the earlier scene."),
      p("If the automatic explosion returns, there is more to work with. If it does not, that is a result for this scene—not all human anger, the entire biography or every possible conversation with the children."),
    ],
  },
  "MEM-02": {
    insertBeforeHeading: "No next scene is not a failure",
    heading: "I record the next scene without abandoning the current one",
    blocks: [
      p("When another memory appears, I note it and return to the scene we are actually working with. Following every new association immediately creates an impressive tour of the archive and very little completed work."),
      p("We imagine the original scene again and check whether the former response remains. Once it is neutral, we take the next relevant scene and repeat the test."),
      p("This is not a rule against changing direction. If the work is stuck, another point of entry may help. The point is to avoid collecting more and more stories without checking what has changed."),
    ],
  },
};

export function getArticleMethodApplication(articleId: string) {
  return articleMethodApplications[articleId];
}
