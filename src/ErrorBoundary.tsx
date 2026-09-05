/**
 * Last line of defence around the page.
 *
 * React unmounts the whole tree when a render throws, so one bad render
 * would otherwise leave a blank page with no way back short of the
 * browser's own reload button. This keeps a reload affordance on screen.
 *
 * Ported from Opsfleet/agentic-bootstrap's app/ui/src/components/ErrorBoundary.tsx.
 */

import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  message: string;
}

export class ErrorBoundary extends Component<Props, State> {
  override state: State = { message: "" };

  static getDerivedStateFromError(error: unknown): State {
    return { message: error instanceof Error ? error.message : String(error) };
  }

  override componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error("Unhandled UI error", error, info.componentStack);
  }

  override render(): ReactNode {
    if (!this.state.message) return this.props.children;
    return (
      <main className="standalone" role="alert">
        <h1 className="standalone__title">Something went wrong</h1>
        <p className="standalone__body">
          The page hit an unexpected error and stopped. Reloading should fix it.
        </p>
        <p className="standalone__body standalone__detail">{this.state.message}</p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => window.location.reload()}
        >
          Reload
        </button>
      </main>
    );
  }
}
