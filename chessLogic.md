
# Chess Rules and Logic

## Pawn
- moves one space forward at a time
- can move one space diagonally (forward) if an enemy piece is present in that position on the board
- can move 2 spaces if the pawn is in the original starting position on the board
- cannot move forward if ally/enemy piece is present in that position on the board
- can swap for any other piece if it reaches the opposite end of the board (relative to its starting position)

## Rook
- can move forward, backwards, left, or right as far as it wants as long as a piece is not in the way
- can kill enemy pieces by moving on top of their respective position
- cannot move past ally pieces
- has unique mechanic called Castling
    - this mechanic requires a Rook and the King
    - as long as the King and the Rook you want to castle with have not moved from their starting positions, you may swap them
    - if swapping with left rook, king moves to first index and rook moves to second index
    - if swapping with right rook, king moves to sixth index, rook moves to fifth index

## Knight
- moves in L pattern
    - two spaces forward and one space to the left
    - two spaces forward and one space to the right
    - one space forward and two spaces to the left
    - one space forward and two spaces to the right
    - two spaces backward and one space to the left
    - two spaces backward and one space to the right
    - one space backward and two spaces to the left
    - one space backward and two spaces to the right
- cannot move onto a space if it is occupied by an ally piece
- can kill enemy pieces by moving on top of their respective position
- can "jump" over ally/enemy pieces

## Bishop
- moves diagonally in any direction as far as it wants (as long as a piece is not in the way)
- can kill enemy pieces by moving on top of their respective position
- cannot move past ally pieces
- cannot move onto a space if it is occupied by an ally piece

## Queen
- can move forward, backwards, left, right, or diagonally in any direction as far as it wants as long as a piece is not in the way
- can kill enemy pieces by moving on top of their respective position
- cannot move past ally pieces
- cannot move onto a space if it is occupied by an ally piece

## King
- can move forward, backwards, left, right, or diagonally in any direction one space as long as a piece is not in the way
- can kill enemy pieces by moving on top of their respective position
- cannot move past ally pieces
- cannot move onto a space if it is occupied by an ally piece
- cannot move onto any space that would be adjacent to an enemy king
- has unique mechanic called Castling
    - this mechanic requires the King and a Rook
    - as long as the King and the Rook you want to castle with have not moved from their starting positions, you may swap them
    - if swapping with left rook, king moves to first index and rook moves to second index
    - if swapping with right rook, king moves to sixth index, rook moves to fifth index
- has unique mechanic of Check/Checkmate
    - if a piece is moved into a position where it threatens (can move onto the King with its next move) a King, that King is put into check
        - a player whose King is put into check must move the King into a position where it is not in check with their next move
        - if a player is unable to move their King out of check, the player is put into checkmate and therefore loses the game


## General Mechanics
- Removed (dead) pieces should be displayed by the side for each player to see
- Players cannot move pieces in such ways that would compromise their own king and result in putting themselves in check
- The game is declared a stalemate (draw) if a player has no legal moves and is not in check

