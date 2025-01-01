
import json

TWILIGHT_RELEASE_NOTES = "./src/release-notes/twilight.json"
STABLE_RELEASE_NOTES = "./src/release-notes/stable.json"

def main():
  with open(TWILIGHT_RELEASE_NOTES, "r") as f:
    twilight = json.load(f)

  with open(STABLE_RELEASE_NOTES, "r") as f:
    stable = json.load(f)

  stable.append(twilight)

  with open(STABLE_RELEASE_NOTES, "w") as f:
    json.dump(stable, f, indent=2)

  with open(TWILIGHT_RELEASE_NOTES, "w") as f:
    json.dump({}, f, indent=2)

  print("Twilight release notes merged into stable release notes.")
