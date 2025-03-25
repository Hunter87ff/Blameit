# BlameIt 🛠️


**BlameIt** is an automation tool that simplifies the process of raising GitHub issues. It provides an API and SDK that allow applications to automatically create GitHub issues based on triggered exceptions or errors, eliminating the need for manual issue creation. Designed for **developers, teams, and open-source projects**, BlameIt makes issue reporting **smarter, faster, and easier.** 🚀✨

## 🔥 Features

- ⚡ **Automated Issue Raising** – Triggers issue creation through API calls.
- 🛑 **Duplicate Prevention** – Checks for existing open issues before creating new ones.
- ✏️ **Custom Issue Templates** – Define issue formats to match your workflow.
- 🎯 **User Assignment** – Automatically assigns issues to specific team members.
- 🔗 **API & SDK Integration** – Seamlessly connects with any app or service.
- 🌍 **Open-Source & Free** – Built for the community, by the community.

## 🚀 Getting Started

### 1️⃣ Install BlameIt on Your GitHub Repo

1. **Go to **[**BlameIt GitHub App**](https://github.com/apps/blameit)** and install it**.
2. **Grant necessary permissions** (issues: write, metadata: read).
3. **Select the repositories you want to integrate with BlameIt.**

### 2️⃣ Integrate with Your Application

Use the BlameIt API to automate issue creation from your app:

```python
import requests

BLAMEIT_API = "https://api.blameit.dev/report"

error_data = {
    "repo": "hunter87ff/repository",
    "error": "NullPointerException in auth module",
    "stack_trace": "...",  # Optional
}

response = requests.post(BLAMEIT_API, json=error_data)
print(response.json())
```

### 3️⃣ Customize Issue Templates

Edit your `.blameit/config.json` to define issue templates:

````json
{
    "template": "### Bug Report\n\n**Description:** {{error}}\n\n**Stack Trace:**\n```{{stack_trace}}```",
    "assign_users": ["@yourteam"]
}
````

## 🛠️ API Reference

| Endpoint  | Method | Description                           |
| --------- | ------ | ------------------------------------- |
| `/report` | POST   | Automate issue creation via API       |
| `/issues` | GET    | Fetch all issues created by BlameIt   |
| `/config` | GET    | Get your repo’s BlameIt configuration |

## 📜 License

BlameIt is **open-source** under the [MIT License](LICENSE).

## 💖 Contributing

Contributions are welcome! Open an issue, submit a PR, or discuss improvements in the [GitHub Discussions](https://github.com/hunter87ff/blameit/discussions)!

## 🛠 Maintainers

- [**hunter87ff**](https://github.com/hunter87ff) (Creator & Maintainer)

---

✨ *Automate issue creation and focus on fixing, not reporting. Let BlameIt handle the rest.* ✨

