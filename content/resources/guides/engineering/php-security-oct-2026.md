---
title: "The October 2026 PHP Security Fix: Your Checklist"
excerpt: "Two PHP flaws let strangers run code on your server. Check your version, find the safe ones, message your host."
date: "Oct 22, 2026"
readTime: "4 min"
tags: ["security", "php", "wordpress", "engineering", "cve"]
featured: true
---

*For anyone with a website. Written 22 October 2026 from the official sources at the bottom. Things move fast: if anything here disagrees with [php.net](https://www.php.net/archive/2026.php#2026-10-21-5), php.net wins.*

## What happened, in one line

Two flaws in PHP, the language behind most of the web (including every WordPress site), let a stranger run their own code on your website's server without a password. The official fix came out on **21 October 2026**, and attacks have already started.

The flaws are **CVE-2026-109618** and **CVE-2026-109619**, nicknamed "PHP2Shell".

---

## 1. Find your PHP version (2 minutes)

- **WordPress:** Dashboard → Tools → Site Health → Info → Server → "PHP version".
- **Hosting panel (cPanel, Plesk and similar):** look for "PHP version" or "Select PHP version".
- **Developers:** run `php -v` on the server.

## 2. Compare it with the safe versions

| Your version starts with | What to do |
|---|---|
| 8.5 | Safe on **8.5.12** or newer |
| 8.4 | Safe on **8.4.27** or newer |
| 8.3 | Safe on **8.3.36** or newer |
| 8.2 | Safe on **8.2.35** or newer (8.2 stops getting fixes on 31 Dec 2026, so plan the move to 8.3 or newer) |
| 8.1, 8.0 or 7.x | **No fix is coming.** Move to a supported version (8.3 or newer) |

## 3. If someone else runs your site, send them this

```text
Hi, I'd like to confirm we're protected against the October 2026 PHP vulnerabilities (CVE-2026-109618 and CVE-2026-109619). Has the official PHP security update been applied to the server my site runs on, and which PHP version is it on now? If we're on 8.1 or older, what's the plan to upgrade?
```

## 4. What doesn't fix it

- **Updating WordPress, your theme or your plugins.** The problem is in PHP itself, the software underneath your site.
- **"Quick fix" plugins or code snippets.** Security researchers have warned against them. The official PHP update is the only fix.

## 5. If you can't update today

- The NSA advises taking a system offline if it can't be patched.
- php.net lists temporary settings that reduce the risk, but says they **do not make an installation safe**. Treat them as a stopgap for hours, not a fix.

## 6. After you've updated

Good habits, not something the advisories require:

- Check for admin users you don't recognise, and for unexpected changes to your checkout or login pages.
- Change admin passwords and any API keys stored on the server.
- Turn on two-factor login for your site's admin accounts.

## 7. If you just use websites

- Turn on two-factor login wherever you can.
- Be suspicious of surprise "password reset" or "site maintenance" emails over the next few days. Go to the site directly instead of clicking the link.

---

## The prompt to give your AI

Copy this into ChatGPT, Claude or Gemini:

```text
I have a website and I want to check whether I'm affected by the October 2026 PHP security vulnerabilities (CVE-2026-109618 and CVE-2026-109619, nicknamed "PHP2Shell"). Use only these official sources:
https://www.php.net/archive/2026.php#2026-10-21-5
https://www.nsa.gov/Press-Room/Press-Releases-Statements/Press-Release-View/Article/4630238/nsa-advisory-php-updates/
https://www.wiz.io/blog/php2shell-php-rce

My site runs on: [WordPress / Shopify / custom / not sure], hosted by: [host name or "not sure"].

Ask me one question at a time to find my PHP version, tell me plainly whether I'm safe, and if I'm not, write the exact message I should send to whoever runs my server. Don't suggest plugins as a fix. If the sources don't answer something, say so instead of guessing.
```

---

## Official sources

- [PHP security advisory](https://www.php.net/archive/2026.php#2026-10-21-5): safe versions, the two flaws
- [NSA advisory](https://www.nsa.gov/Press-Room/Press-Releases-Statements/Press-Release-View/Article/4630238/nsa-advisory-php-updates/)
- [Wiz Research](https://www.wiz.io/blog/php2shell-php-rce): who found it, and how
- [Google Cloud guidance](https://cloud.google.com/blog/products/identity-security/responding-to-core-php-vulnerabilities-cve-2026-109618-cve-2026-109619): affected versions, no fixes for 8.1 or older
- [Patchstack](https://patchstack.com/articles/php-major-vulnerability-alert-10-2026/): attacks seen, warning about "fix" plugins
- [Wordify](https://wordify.com/blog/php-security-vulnerability-wordpress-october-2026/): how WordPress owners check, questions for your host
