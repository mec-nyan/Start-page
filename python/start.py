#!/usr/bin/env python3 
'''Start page

Keep all my fav sites and doc at hand.
Curses version.

version: 0.1
author: mariano eloy collantes
date: 20222901
'''

import curses
import math
import data



def main(screen):
    curses.start_color()
    curses.use_default_colors()
    curses.curs_set(False)

    curses.init_pair(1, 4, -1)
    blue_fg = curses.color_pair(1)

    lines, cols = screen.getmaxyx()

    main_window = curses.newwin(lines, cols, 0, 0)

    main_window.addstr(f'Terminal size: { lines } lines, { cols } columns')
    main_window.getch()
    main_window.clear()
    main_window.refresh()

    pads = []
    pad_w = cols // 5
    pad_h = lines // 8
    margin_top =  math.ceil((lines - 8 * pad_h) / 2)
    margin_left = math.ceil((cols - 5 * pad_w) / 2)

    for i in range(8):
        pads.append([])
        for j in range(5):
            if data.grid.get(i, j):
                current = data.grid.get(i, j)
                win = curses.newwin(pad_h, pad_w, margin_top + i * pad_h, margin_left + j * pad_w)
                win.bkgdset(blue_fg)
                win.box()
                win.addstr(2, 2, f'{ current.face } { current.name }')
                win.refresh()
                pads[i].append(win)
            
    main_window.getch()
            


if __name__ == '__main__':
    curses.wrapper(main)

