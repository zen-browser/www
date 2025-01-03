
import json
import sys
import datetime

TWILIGHT_RELEASE_NOTES = "./src/release-notes/twilight.json"
STABLE_RELEASE_NOTES = "./src/release-notes/stable.json"

def main():
  if len(sys.argv) != 2:
    print("Usage: python scripts/twilight-to-stable.py <workflow-id>")
    sys.exit(1)
  
  workflow_id = int(sys.argv[1])

  with open(TWILIGHT_RELEASE_NOTES, "r") as f:
    twilight = json.load(f)

  with open(STABLE_RELEASE_NOTES, "r") as f:
    stable = json.load(f)

  twilight["workflowId"] = workflow_id
  twilight["image"] = False
  twilight["version"] = twilight["version"].replace("-t", "-b")
  twilight["date"] = datetime.datetime.now().strftime("%d/%m/%Y")
  stable.append(twilight)

  with open(STABLE_RELEASE_NOTES, "w") as f:
    json.dump(stable, f, indent=2)

  with open(TWILIGHT_RELEASE_NOTES, "w") as f:
    json.dump({
      "version": "xxx",
      "image": False,
      "extra": "",
      "fixes": [],
      "features": [],
    }, f, indent=2)

  print("Twilight release notes merged into stable release notes.")

if __name__ == "__main__":
  main()