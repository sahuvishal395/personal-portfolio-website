// Where this visit started, saved once per browser session so that an
// enquiry sent later can say how the visitor found the site. Only the
// landing path, the referring site's hostname and utm_source are kept.
export interface EnquiryVisit {
  landing: string;
  referrer: string;
  utm: string;
}

const KEY = "enquiry:visit";

export function rememberVisit() {
  try {
    if (sessionStorage.getItem(KEY)) return;
    let referrer = "";
    try {
      const host = new URL(document.referrer).hostname;
      if (host !== window.location.hostname) referrer = host;
    } catch {}
    const visit: EnquiryVisit = {
      landing: window.location.pathname,
      referrer,
      utm: new URLSearchParams(window.location.search).get("utm_source") ?? "",
    };
    sessionStorage.setItem(KEY, JSON.stringify(visit));
  } catch {}
}

export function currentVisit(): EnquiryVisit {
  try {
    const saved = JSON.parse(sessionStorage.getItem(KEY) ?? "null");
    if (saved && typeof saved === "object") return saved as EnquiryVisit;
  } catch {}
  return { landing: "", referrer: "", utm: "" };
}
