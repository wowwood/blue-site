// shamelessly stolen from bonzi, https://bonzi.sh - your da sells avon
// love you <3

function statusFetch() {
  const t = "https://t.b0.ax/status.json";
  fetch(t).then(t=>{
      if (!t.ok)
          throw new Error("Network response was not ok");
      return t.json()
  }
  ).then(t=>{
      const e = t.statuses.map(t=>{
          const e = getStatusClass(t.status)
            , a = t.url ? `<a href="${t.url}">${t.service_name}</a>` : t.service_name;
          return `<tr><th scope="row" class="govuk-table__header">${a}</th><td class="govuk-table__cell"><span class="govuk-tag ${e}">${t.status}</span></td></tr>`
      }
      ).join("")
        , a = new Date(1e3 * t.last_updated).toLocaleString("en-GB", {
          timeZone: "GMT"
      });
      document.getElementById("status").innerHTML = `\n            <span class="govuk-visually-hidden">Service Status Table: </span>\n            <table class="govuk-table">\n                ${e}\n            </table>\n            <p class="govuk-body"><span class="govuk-visually-hidden">Information </span>Last Updated: ${a} GMT</p>\n        `
  }
  ).catch(t=>{
      console.error("There has been a problem with your fetch operation:", t)
  }
  )
}
function getStatusClass(t) {
  switch (t) {
  case "up":
      return "govuk-tag--green";
  case "down":
      return "govuk-tag--red";
  case "degraded":
      return "govuk-tag--yellow";
  case "maintenance":
      return "govuk-tag--blue";
  default:
      return "govuk-tag--grey"
  }
}



function statusFetch() {
  const t =
    "https://hc.ztn.sh/badge/24488b14-0c61-475a-af8e-91ad0c/5OosQh4F.json";
  fetch(t)
    .then((t) => {
      if (!t.ok) throw new Error("Network response was not ok");
      return t.json();
    })
    .then((t) => {
      document.getElementById("status");
      const e = getStatusClass(t.status)




      //const e = t.statuses.map((t) => {
            
              a = t.url
                ? `<a href="${t.url}">${t.service_name}</a>`
                : t.service_name;
            return `<tr><th scope="row" class="govuk-table__header">${a}</th><td class="govuk-table__cell"><span class="govuk-tag ${e}">${t.status}</span></td></tr>`;
          })
          .join(""),
        a = new Date(1e3 * t.last_updated).toLocaleString("en-GB", {
          timeZone: "GMT",
        });
      document.getElementById(
        "status"
      ).innerHTML = `\n            <span class="govuk-visually-hidden">Service Status Table: </span>\n            <table class="govuk-table">\n                ${e}\n            </table>\n            <p class="govuk-body"><span class="govuk-visually-hidden">Information </span>Last Updated: ${a} GMT</p>\n        `;
    })
    .catch((t) => {
      console.error("There has been a problem with your fetch operation:", t);
    });
}
function getStatusClass(t) {
  switch (t) {
    case "up":
      return "govuk-tag--green";
    case "down":
      return "govuk-tag--red";
    case "late":
      return "govuk-tag--yellow";
    case "maintenance":
      return "govuk-tag--blue";
    default:
      return "govuk-tag--grey";
  }
}
