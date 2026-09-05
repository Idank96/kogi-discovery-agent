/**
 * The sample-discovery chat panel. Split out of sections.tsx per that
 * file's own rule: a section gets its own file once it grows past ~40
 * lines or needs its own test — this is the one section that does both.
 */
import type { Content, Turn } from "../content";

function initial(who: string): string {
  return who.startsWith("Employee") ? "E" : who.charAt(0);
}

function TurnBubble({ turn }: { turn: Turn }) {
  return (
    <div className={`turn-row ${turn.speaker}`}>
      <span className="avatar">{initial(turn.who)}</span>
      <div className="turn">
        <p className="who">{turn.who}</p>
        {turn.savedIdea && (
          <div className="saved-idea">
            <p className="head">
              <span className="mark"></span>
              <span className="label">Saved idea</span>
            </p>
            <p>{turn.savedIdea.idea}</p>
            <p className="meta">{turn.savedIdea.meta}</p>
          </div>
        )}
        <p className="msg">{turn.msg}</p>
        <p className="time">{turn.time}</p>
      </div>
    </div>
  );
}

export function Transcript({ content }: { content: Content }) {
  return (
    <section className="transcript" id="how" aria-labelledby="transcript-heading">
      <span id="transcript-heading" className="kicker">
        {content.transcriptKicker}
      </span>
      <div className="chat-panel">
        <div className="chat-header">
          <span className="dot"></span>
          <span className="title">{content.product} — discovery session</span>
        </div>
        <div className="log">
          {content.transcript.map((turn) => (
            <TurnBubble key={`${turn.who}-${turn.time}-${turn.msg}`} turn={turn} />
          ))}
        </div>
      </div>
    </section>
  );
}
