
let BackUrl = null;
const BasiUrl = process.env.VUE_APP_BASIC_API;

if (BasiUrl === "dev") {
  BackUrl = "dev url";
} else if (BasiUrl === "qa") {
  BackUrl = "qa url";
} else if (BasiUrl === "prd") {
  BackUrl = "prd url";
}
export default BackUrl;
