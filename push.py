import os

x = input('Commit message: ')

os.system('npm run lint')
os.system('npm run format')
os.system('npm run build')

os.system('git add .')
os.system(f'git commit -m "{x}"')
os.system('git push')