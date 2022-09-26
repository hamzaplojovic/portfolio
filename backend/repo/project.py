from deta import Deta
import httpx

deta = Deta("a0ek6700_fRxhARKyW6MNuqi8n8jrzd25Eyi3vUTo")
db = deta.Base("projects")


def get_all_projects():
    return db.fetch().items


def create_project(request):
    request = dict(request)

    github_repo = "https://api.github.com/repos/hamzaplojovic/" + \
        request["github"]
    repo_languages = "https://api.github.com/repos/hamzaplojovic/" + \
        request["github"]+"/languages"
    repo_contributors = "https://api.github.com/repos/hamzaplojovic/" + \
        request["github"]+"/contributors"
    languages = httpx.get(repo_languages).json()
    languages_numbers = [int(languages[x]) for x in languages]
    languages_names = [x for x in languages]
    languages_sum = sum(languages_numbers)

    r = httpx.get(github_repo).json()
    request["origin"] = r["created_at"]
    request["languages"] = [int((int(x)/languages_sum) * 100)
                            for x in languages_numbers]
    request["languages"] = [{"language": languages_names[x], "percentage":request["languages"][x]}
                            for x in range(len(languages_names))]
    request["description"] = r["description"]
    request["link"] = r["homepage"]
    request["license"] = r["license"]
    request["contributors"] = httpx.get(repo_contributors).json()
    return db.put(dict(request), key=request["name"])


def change_project(request):
    return db.put(dict(request), key=request.name)


def delete_project(name):
    return db.delete(name)
