// Run: node --no-warnings scripts/check-contact.mts  (Node ≥ 24 strips the types)
import assert from "node:assert/strict";
import { validateContact } from "../src/lib/contact.ts";

const ok = { name: "Anna Muster", email: "anna@beispiel.ch", telefon: "", message: "Hallo, ich brauche eine Website." };

assert.deepEqual(validateContact(ok), { ok: true, data: ok, spam: false });
assert.deepEqual(validateContact({ ...ok, website: "http://spam" }), { ok: true, data: ok, spam: true });
assert.equal(validateContact({ ...ok, name: " " }).ok, false);
assert.equal(validateContact({ ...ok, email: "kein-mail" }).ok, false);
assert.equal(validateContact({ ...ok, message: "hi" }).ok, false);
assert.equal(validateContact({ ...ok, message: "x".repeat(5001) }).ok, false);
assert.equal(validateContact({ ...ok, name: "Anna\nMuster" }).ok, false);
assert.equal(validateContact({ ...ok, email: "a,b@beispiel.ch" }).ok, false);
assert.equal(validateContact(null).ok, false);
console.log("contact validation: all checks passed");
