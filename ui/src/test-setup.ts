/**
 * Vitest setup file for UI tests.
 * Initializes i18next with English translations so components that use
 * useTranslation() render real English text in tests.
 */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "./i18n/en/common.json";
import enNav from "./i18n/en/nav.json";
import enAgents from "./i18n/en/agents.json";
import enIssues from "./i18n/en/issues.json";
import enProjects from "./i18n/en/projects.json";
import enGoals from "./i18n/en/goals.json";
import enApprovals from "./i18n/en/approvals.json";
import enCosts from "./i18n/en/costs.json";
import enActivity from "./i18n/en/activity.json";
import enSettings from "./i18n/en/settings.json";
import enCompanies from "./i18n/en/companies.json";
import enRoutines from "./i18n/en/routines.json";
import enInbox from "./i18n/en/inbox.json";
import enPlugins from "./i18n/en/plugins.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  defaultNS: "common",
  resources: {
    en: {
      common: enCommon,
      nav: enNav,
      agents: enAgents,
      issues: enIssues,
      projects: enProjects,
      goals: enGoals,
      approvals: enApprovals,
      costs: enCosts,
      activity: enActivity,
      settings: enSettings,
      companies: enCompanies,
      routines: enRoutines,
      inbox: enInbox,
      plugins: enPlugins,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});
