"use server";
import https from "https";
import fetch from "node-fetch";

const agent = new https.Agent({
  rejectUnauthorized: false,
});

export async function registerUser(requestBody: any) {
  const response = fetch("https://localhost:7173/api/user", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    agent,
    body: JSON.stringify(requestBody),
  }).then((response) => response.text());

  return response;
}
