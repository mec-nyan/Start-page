#!/usr/bin/env python3 

class Link:
    def __init__(self, name, url, face='@'):
        self.name = name
        self.url = url
        self.face = face

    def __str__(self):
        return self.name
        
class Grid:
    def __init__(self, rows, cols):
        self.rows = rows
        self.cols = cols
        self.grid = []
        for i in range(rows): 
            self.grid.append([None for i in range(cols)])

    def insert(self, row, col, elem):
        self.grid[row][col] = elem

    def get(self, row, col):
        return self.grid[row][col]

    def insert_column(self, col, _list):
        for i in range(len(_list)):
            if i < self.rows:
                self.grid[i][col] = _list[i]
            else:
                pass    # Throw here!
    
    def show(self):
        for row in self.grid:
            for col in row:
                print(str(col), end=', ')
            print()


debian = Link('Debian', None, '🧠')
raspberrypi = Link('Raspberri Pi', None, '🍓')
javascript = Link('Javascript', None)
typescript = Link('Typescript', None, '🤖')
cpp = Link('C++', None)
lua = Link('Lua', None, '🌕')
python = Link('Python', None, '🐍')
reactjs = Link('Reactjs', None, '')
router = Link('React router', None)
mui = Link('Material UI', None)
webpack = Link('Webpack', None)
cra = Link('Create react app', None)
redux = Link('React redux', None)
mdn = Link('MDN Web docs', None, '🦊')
w3school = Link('W3school', None)
gmail = Link('Gmail', None)
calendar = Link('Calendar', None)
github = Link('Github', None)
cambridge = Link('Cambridge dictionary', None, '📙')
macmillan = Link('Macmillan dictionary', None, '📘')
newsletter = Link('Newsletter', None, '📄')

oses = [debian, raspberrypi]
languages = [cpp, javascript, typescript, python, lua]
libraries = [reactjs, router, mui, webpack, cra, redux]
services = [github, gmail, calendar]
misc = [mdn, w3school, newsletter, cambridge, macmillan]

grid = Grid(8, 5)
grid.insert_column(0, oses)
grid.insert_column(1, languages)
grid.insert_column(2, libraries)
grid.insert_column(3, services)
grid.insert_column(4, misc)

if __name__ == '__main__':
    grid.show()
