#!/usr/bin/env python3
'''Block icons'''


import curses

upper_half = '▀'
lower_half = '▄'
left_half = '▌'
right_half = '▐'
space = ' '
full_block = '█'
shade_1 = '░'
shade_2 = '▒'
shade_3 = '▓'
top_left = '▘'
top_right = '▝'
bottom_left = '▖'
bottom_right = '▗'
checkers_1 = '▚'
checkers_2 = '▞'
minus_tl = '▟'
minus_tr = '▙'
minus_bl = '▜'
minus_br = '▛'

blocks = [upper_half, lower_half, left_half, right_half, space, full_block, shade_3, shade_2, shade_1,
          top_right, top_left, bottom_right, bottom_left, checkers_1, checkers_2, minus_br, minus_bl, minus_tr, minus_tl]

black = 16
white = 231
blue = 33
yellow = 220
red = 1
green = 2
default = -1


def put_icon(y, x, window, icon):
    for i in range(len(icon)):
        for j in range(len(icon[i])):
            window.addstr(
                y + i, x + j, icon[i][j][0], icon[i][j][1])


def main(screen):
    curses.curs_set(False)
    curses.start_color()
    curses.use_default_colors()

    curses.init_pair(1, white, default)
    curses.init_pair(2, blue, white)
    curses.init_pair(3, yellow, white)
    curses.init_pair(4, blue, yellow)
    curses.init_pair(5, blue, default)
    curses.init_pair(6, yellow, default)
    curses.init_pair(7, green, default)
    curses.init_pair(8, red, default)

    white_on_black = curses.color_pair(1)
    blue_on_white = curses.color_pair(2)
    yellow_on_white = curses.color_pair(3)
    blue_on_yellow = curses.color_pair(4)
    blue_on_black = curses.color_pair(5)
    yellow_on_black = curses.color_pair(6)
    green_on_black = curses.color_pair(7)
    red_on_black = curses.color_pair(8)

    lines, columns = screen.getmaxyx()

    window = curses.newwin(lines, columns, 0, 0)

    python_w_border = [
        [
            [bottom_right, white_on_black],
            [minus_tl, white_on_black],
            [lower_half, blue_on_white],
            [lower_half, blue_on_white],
            [minus_tr, white_on_black],
            [bottom_left, white_on_black],
        ],
        [
            [full_block, white_on_black],
            [full_block, blue_on_white],
            [upper_half, blue_on_yellow],
            [upper_half, blue_on_yellow],
            [full_block, yellow_on_white],
            [full_block, white_on_black],
        ],
        [
            [top_right, white_on_black],
            [minus_bl, white_on_black],
            [upper_half, yellow_on_white],
            [upper_half, yellow_on_white],
            [minus_br, white_on_black],
            [top_left, white_on_black],
        ],
    ]

    python_no_border = [
        [
            [space, white_on_black],
            [space, white_on_black],
            [lower_half, blue_on_black],
            [lower_half, blue_on_black],
            [space, white_on_black],
            [space, white_on_black],
        ],
        [
            [space, white_on_black],
            [full_block, blue_on_white],
            [upper_half, blue_on_yellow],
            [upper_half, blue_on_yellow],
            [full_block, yellow_on_white],
            [space, white_on_black],
        ],
        [
            [space, white_on_black],
            [space, white_on_black],
            [upper_half, yellow_on_black],
            [upper_half, yellow_on_black],
            [space, white_on_black],
            [space, white_on_black],
        ],
    ]

    raspberry_pi = [
        [
            [space, white_on_black],
            [minus_bl, green_on_black],
            [minus_tr, green_on_black],
            [minus_tl, green_on_black],
            [minus_br, green_on_black],
            [space, white_on_black],
        ],
        [
            [bottom_right, red_on_black],
            [minus_bl, red_on_black],
            [minus_tl, red_on_black],
            [minus_tr, red_on_black],
            [minus_br, red_on_black],
            [bottom_left, red_on_black],
        ],
        [
            [space, white_on_black],
            [upper_half, red_on_black],
            [minus_tl, red_on_black],
            [minus_tr, red_on_black],
            [upper_half, red_on_black],
            [space, white_on_black],
        ],
    ]

    icons = [python_w_border, python_no_border, raspberry_pi]

    margin_top = 2
    margin_left = 4
    icon_w = 10

    for i in range(len(icons)):
        put_icon(margin_top, margin_left + icon_w * i, window, icons[i])

    window.getch()


if __name__ == '__main__':
    curses.wrapper(main)
