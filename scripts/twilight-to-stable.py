
import json
import sys
import datetime

TWILIGHT_RELEASE_NOTES = "./src/release-notes/twilight.json"
STABLE_RELEASE_NOTES = "./src/release-notes/stable.json"

def main():
    
    if len(sys.argv) != 2:
        print("Usage: python scripts/twilight-to-stable.py <workflow-id>")
        sys.exit(1)
    
    try:
        workflow_id = int(sys.argv[1])
        if workflow_id < 0:
            raise ValueError("Workflow ID must be a non-negative integer")
    except ValueError as e:
        print(f"Error: Invalid workflow-id - {str(e)}")
        sys.exit(1)

    try:
        with open(TWILIGHT_RELEASE_NOTES, "r") as f:
            twilight = json.load(f)
        with open(STABLE_RELEASE_NOTES, "r") as f:
            stable = json.load(f)

        if not isinstance(twilight.get("version"), str):
            raise ValueError("Twilight version must be a string")

        twilight["workflowId"] = workflow_id
        twilight["image"] = False
        twilight["version"] = twilight["version"].replace("t", "b")
        twilight["date"] = datetime.datetime.now().strftime("%d/%m/%Y")
        
        if not isinstance(stable, list):
            stable = [stable]
        stable.append(twilight)

        with open(STABLE_RELEASE_NOTES, "w") as f:
            json.dump(stable, f, indent=2)

        with open(TWILIGHT_RELEASE_NOTES, "w") as f:
            json.dump({
                "version": "xxx",
                "extra": "",
                "fixes": [],
                "features": [],
            }, f, indent=2)

        print("Twilight release notes merged into stable release notes.")

    except FileNotFoundError as e:
        print(f"Error: Could not find file - {str(e)}")
        sys.exit(1)
    except json.JSONDecodeError as e:
        print(f"Error: Invalid JSON format in release notes - {str(e)}")
        sys.exit(1)
    except Exception as e:
        print(f"Error: An unexpected error occurred - {str(e)}")
        sys.exit(1)

if __name__ == "__main__":
    main()
