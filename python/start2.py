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

    curses.init_pair(1, 231, 234)
    win_color = curses.color_pair(1)

    curses.init_pair(2, 242, 235)
    pad_color = curses.color_pair(2)

    lines, cols = screen.getmaxyx()

    main_window = curses.newwin(lines, cols)
    main_window.bkgdset(win_color)
    main_window.clear()
    main_window.refresh()

    # Get the size of the pads, 8 x 5 grid (h x w)
    #
    padding = {'top': 1, 'left': 2}
    gap = {'vertical': 1, 'horizontal': 2}

    pad_w = (cols - ((padding['left'] * 2) + (gap['horizontal'] * 4))) // 5
    pad_h = (lines - ((padding['top'] * 2) + (gap['vertical'] * 7))) // 8

    used_w = (pad_w * 5) + (gap['horizontal'] * 4)
    used_h = (pad_h * 8) + (gap['vertical'] * 7)

    margin_left = math.ceil((cols - used_w) / 2) - 1
    margin_top = math.ceil((lines - used_h) / 2) - 1

    pads = []
    for y in range(8):
        pads.append([])
        for x in range(5):
            if data.grid.get(y, x):
                y_pos = margin_left + (pad_h + gap['vertical']) * y
                x_pos = margin_top + (pad_w + gap['horizontal']) * x
                current = data.grid.get(y, x)
                pad = curses.newwin(pad_h, pad_w, y_pos, x_pos)
                pad.bkgdset(pad_color)
                pad.clear()
                pad.addstr(2, 2, f'{ current.face } { current.name }')
                pad.refresh()
                pads[y].append(pad)

    main_window.getch()


if __name__ == '__main__':
    curses.wrapper(main)
