# Demonstration #09: "Repetir Para ..." Pitfall

## Problem

Read and write given numbers while zero is not entered.

## Example

Input:

    1
    2
    3
    0


Output:

    1
    2
    3


## Pseudocode

### Aproach #01

Problems:

* How many numbers will be output?
* Which are the initial and final values? 

```pseudocode
INICIO
    ED: n, x INTEIRO
    
    REPETIR PARA x ← ? ATE ?
        ...
    FIMREPETIR
FIM
```

### Aproach #02

```pseudocode
INICIO
    ED: n INTEIRO 
    
    REPETIR
        LER (n)
        SE (n != 0 ) ENTAO
            ESCREVER (n) 
        FIMSE
    ENQUANTO (n != 0) 
FIM
```