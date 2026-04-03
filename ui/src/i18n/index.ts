import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// English namespaces
import enCommon from "./en/common.json";
import enNav from "./en/nav.json";
import enAgents from "./en/agents.json";
import enIssues from "./en/issues.json";
import enProjects from "./en/projects.json";
import enGoals from "./en/goals.json";
import enApprovals from "./en/approvals.json";
import enCosts from "./en/costs.json";
import enActivity from "./en/activity.json";
import enSettings from "./en/settings.json";
import enCompanies from "./en/companies.json";
import enRoutines from "./en/routines.json";
import enInbox from "./en/inbox.json";
import enPlugins from "./en/plugins.json";

// Korean namespaces
import koCommon from "./ko/common.json";
import koNav from "./ko/nav.json";
import koAgents from "./ko/agents.json";
import koIssues from "./ko/issues.json";
import koProjects from "./ko/projects.json";
import koGoals from "./ko/goals.json";
import koApprovals from "./ko/approvals.json";
import koCosts from "./ko/costs.json";
import koActivity from "./ko/activity.json";
import koSettings from "./ko/settings.json";
import koCompanies from "./ko/companies.json";
import koRoutines from "./ko/routines.json";
import koInbox from "./ko/inbox.json";
import koPlugins from "./ko/plugins.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
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
      ko: {
        common: koCommon,
        nav: koNav,
        agents: koAgents,
        issues: koIssues,
        projects: koProjects,
        goals: koGoals,
        approvals: koApprovals,
        costs: koCosts,
        activity: koActivity,
        settings: koSettings,
        companies: koCompanies,
        routines: koRoutines,
        inbox: koInbox,
        plugins: koPlugins,
      },
    },
    fallbackLng: "en",
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "paperclip:language",
      caches: ["localStorage"],
    },
  });

export default i18n;
