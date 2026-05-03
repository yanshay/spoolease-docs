---
draft: true
---
# OpenAI API Key

## Introduction

Some SpoolEase features use OpenAI.

At this time, the main user-facing feature that uses it is [**Spool Scanner**](spool-scanner).

To use these features, you need to:

1. Create an OpenAI API key
2. Configure that key in SpoolEase

OpenAI API usage is billed by OpenAI and there is no affiliation with SpoolEase, and it is separate from any ChatGPT subscription you may have.

If you want to review OpenAI pricing, see:
- [OpenAI API Pricing](https://openai.com/api/pricing/)

## Configure the Key in SpoolEase

This is the SpoolEase side of the setup.

1. Open the inventory application.
2. Press the settings icon at the top right.
3. Open **Console Configuration**.
4. Find the **OpenAI API Key** section.
5. Paste your OpenAI API key.
6. Save it.

The key is stored on the SpoolEase Console itself, in flash storage.

- it is not stored in the browser
- it is fetched from the console when needed and discarded immediately
- you can later update it, remove it, or display it again from the same page
- you can also revoke it from OpenAI user interface in case you decide you don't want it used any more

## How to Get an OpenAI API Key

If you have never used the OpenAI API key before, follow these steps.

### 1. Open the OpenAI platform

Go to:

- [OpenAI Platform Login](https://platform.openai.com/login)

Sign in, or create an account if needed.

### 2. Make sure billing is enabled

The OpenAI API is a paid service.

If billing is not enabled yet, OpenAI will guide you through that when needed.

If you already use ChatGPT, keep in mind that ChatGPT access and OpenAI API usage are separate.

### 3. Create a project named SpoolEase

OpenAI organizes API usage by projects. For SpoolEase, it is best to create a dedicated project so usage is easy to monitor and limit separately from other applications you may have or want to use separately.

OpenAI project help:

- [Managing projects in the API platform](https://help.openai.com/en/articles/9186755-managing-projects-in-the-api-platform)

Create a new project and name it:

- **SpoolEase**

## Set a Small Budget

Before creating the key, set a small monthly budget for the project.

For most users, a budget of around **$5** is more than enough to get started.

Do **not** leave this unlimited.

This is not meant to be frightening. In normal home use, costs should usually stay low. The point is simply to start small, monitor real usage, and increase the budget later only if needed.

:::note
OpenAI project budgets are mainly there to help you monitor usage. They are not meant to be treated as a strict hard stop. For that reason, it is a good idea to keep the budget small and also configure an earlier notification.
:::

### 4. Add a usage notification

After setting the monthly budget, add an alert before reaching it.

A good starting point is:

- monthly budget: **$5**
- alert threshold: about **80%**

That way you get an early warning before reaching the full monthly amount.

OpenAI explains project budgets and alerts here:

- [Managing projects in the API platform](https://help.openai.com/en/articles/9186755-managing-projects-in-the-api-platform)

## 5. Create a Project API Key

Inside the **SpoolEase** project:

1. Open the project settings
2. Open **API Keys**
3. Create a new secret key
4. Copy it immediately

:::warning
OpenAI may show the full secret key only once. Copy it right away and use it immediately in SpoolEase.
:::

For most users, the standard project key is enough.

## 6. Paste the Key into SpoolEase

After copying the key:

1. Return to the inventory application
2. Press the settings icon at the top right
3. Open **Console Configuration**
4. Find **OpenAI API Key**
5. Paste the key
6. Save it

Once saved, features such as **Spool Scanner** can use it.

## Monitoring Cost and Usage

You can monitor actual API usage in the OpenAI platform.

Useful places to check:

- [OpenAI Usage Page](https://platform.openai.com/usage)
- [OpenAI Limits Page](https://platform.openai.com/settings/organization/limits)
- [OpenAI API Pricing](https://openai.com/api/pricing/)

This is the best way to see what the feature really costs in your own use.

If you only scan occasionally, actual usage may stay very low. The easiest approach is:

- start with a small budget
- add an alert
- try the feature
- check the usage page after a few scans

## Things to Keep in Mind

- OpenAI API usage is separate from ChatGPT subscriptions
- Create a dedicated project named **SpoolEase**
- Start with a small monthly budget, around **$5**
- Add an early notification threshold
- Keep the API key private
- Paste the key only into the **OpenAI API Key** field in SpoolEase

## Troubleshooting

### I already pay for ChatGPT. Why do I still need this?

ChatGPT access and OpenAI API usage are different products. SpoolEase uses the API, so an API key and API billing are still required.

### SpoolEase still says the AI key is missing

Check that:

- the key was pasted into **Console Configuration**
- the key was saved successfully
- you are using the correct inventory connected to the correct console

### I cannot find Projects, Limits, or API Keys in OpenAI

Use OpenAI’s project help page here:

- [Managing projects in the API platform](https://help.openai.com/en/articles/9186755-managing-projects-in-the-api-platform)

### I am worried about cost

This is exactly why you should:

- create a dedicated **SpoolEase** project
- set a small monthly budget first
- add an early alert
- monitor usage in the OpenAI usage page

That gives you a simple and controlled way to try the feature and see the real cost in practice.
