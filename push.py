import subprocess
import os
import json

os.chdir('/Users/aubreymazinyi/Documents/kimi/workspace/hio-labs')

results = []

# Step 1: Check git version
r = subprocess.run(['git', '--version'], capture_output=True, text=True)
results.append({'step': 1, 'cmd': 'git --version', 'stdout': r.stdout.strip(), 'stderr': r.stderr.strip(), 'returncode': r.returncode})

# Step 2: Init if needed
if not os.path.exists('.git'):
    r = subprocess.run(['git', 'init', '-b', 'main'], capture_output=True, text=True)
    results.append({'step': 2, 'cmd': 'git init -b main', 'stdout': r.stdout.strip(), 'stderr': r.stderr.strip(), 'returncode': r.returncode})
else:
    results.append({'step': 2, 'cmd': 'git init -b main', 'note': 'already initialized'})

# Step 3: Add remote if missing
r = subprocess.run(['git', 'remote', 'get-url', 'origin'], capture_output=True, text=True)
if r.returncode != 0:
    r = subprocess.run(['git', 'remote', 'add', 'origin', 'https://github.com/attm1122/hio-labs.git'], capture_output=True, text=True)
    results.append({'step': 3, 'cmd': 'git remote add origin ...', 'stdout': r.stdout.strip(), 'stderr': r.stderr.strip(), 'returncode': r.returncode})
else:
    results.append({'step': 3, 'cmd': 'git remote add origin ...', 'note': 'already exists', 'url': r.stdout.strip()})

# Step 4: Create .gitignore
gitignore = 'node_modules/\ndist/\n.DS_Store\ndesign/\n.worktrees/\n'
with open('.gitignore', 'w') as f:
    f.write(gitignore)
results.append({'step': 4, 'cmd': 'create .gitignore', 'content': gitignore.strip()})

# Step 5: Stage
r = subprocess.run(['git', 'add', '-A'], capture_output=True, text=True)
results.append({'step': 5, 'cmd': 'git add -A', 'stdout': r.stdout.strip(), 'stderr': r.stderr.strip(), 'returncode': r.returncode})

# Step 6: Commit
r = subprocess.run(['git', '-c', 'user.name=HIO Labs', '-c', 'user.email=hello@hiolabs.ai', 'commit', '-m', 'Initial commit: HIO Labs website'], capture_output=True, text=True)
results.append({'step': 6, 'cmd': 'git commit -m "Initial commit: HIO Labs website"', 'stdout': r.stdout.strip(), 'stderr': r.stderr.strip(), 'returncode': r.returncode})

# Step 7: Push
r = subprocess.run(['git', 'push', '-u', 'origin', 'main', '--force'], capture_output=True, text=True)
results.append({'step': 7, 'cmd': 'git push -u origin main --force', 'stdout': r.stdout.strip(), 'stderr': r.stderr.strip(), 'returncode': r.returncode})

# Output artifact
print(json.dumps({'artifact': {'results': results}}))
