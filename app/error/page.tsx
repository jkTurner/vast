import { Suspense } from "react";
import ErrorContent from "./ErrorContent";

export default function ErrorPage() {
  return (
    <Suspense fallback={<p className="text-center text-sm mt-md">Loading error...</p>}>
      <ErrorContent />
    </Suspense>
  );
}
