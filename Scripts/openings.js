const mode = "learn";

const openings = {
  dutch: {
    name: "Obrona holenderska",
    variant: "Wariant główny z pionem f5",
    moves: [
      ["RNBKQBNRPPPPPPPP8888pppppppprnbkqbnr", "Pozycja startowa", ""],
      [
        "RNBKQBNRPPPP1PPP84P388pppppppprnbkqbnr",
        "Białe rozpoczynają klasycznym ruchem pionem hetmańskim",
        "d4",
      ],
      [
        "RNBKQBNRPPPP1PPP84P32p58pp1ppppprnbkqbnr",
        "Odpowiadamy ruchem pionem do przodu na f5",
        "f5",
      ],
      [
        "RNBKQBNRPPPP2PP84PP4p58pp1ppppprnbkqbnr",
        "Białe budują centrum wspierając piona d4 ruchem c4, jest to najbardziej popularny ruch w tej pozycji",
        "c4",
      ],
      [
        "RNBKQBNRPPPP2PP84PP4p52n5pp1pppppr1bkqbnr",
        "Rozwijamy skoczka atakując pole e4",
        "Nf6",
      ],
      [
        "RNBKQB1RPPPP2PP5N24PP4p52n5pp1pppppr1bkqbnr",
        "Białe rozwijają skoczka wzmacniając kontrolę nad centrum",
        "Nc3",
      ],
      [
        "RNBKQB1RPPPP2PP5N24PP4p52np4pp2ppppr1bkqbnr",
        "Gramy e6 przygotowując rozwój gońca i roszadę",
        "e6",
      ],
      [
        "R1BKQB1RPPPP2PP2N2N24PP4p52np4pp2ppppr1bkqbnr",
        "Białe kontynuują rozwój skoczka",
        "Nf3",
      ],
      [
        "R1BKQB1RPPPP2PP2N2N24PPb3p52np4pp2ppppr2kqbnr",
        "Rozwijamy gońca z ideą pogorszenia struktury pionowej przeciwnika przy wymianie",
        "Bb4",
      ],
      [
        "R1BKQ2RPPPP2PP2N2N24PPb2Bp52np4pp2ppppr2kqbnr",
        "Białe odpowiadają aktywnie grając Bg5 i wiążąc naszego skoczka",
        "Bg5",
      ],
      [
        "R1BKQ2RPPPP2PP2N2b24PP3Bp52np4pp2ppppr2kqbnr",
        "Kontynuujemy plan zniszczenia struktury pionowej przeciwnika",
        "Bxc3+",
      ],
      [
        "R1BKQ2RPPPP3P2N2P24PP3Bp52np4pp2ppppr2kqbnr",
        "Białe odbijają pionem b2",
        "bxc3",
      ],
      [
        "R1BKQ2RPPPP3P2N2P24PP3Bp5p1np5p2ppppr2kqbnr",
        "Nasze piony ustawione na białych polach zostawiają czarnopolowemu gońcowi białego dużo możliwości ataku, jest silną figurą więc próbujemy wymusić wymianę figur",
        "h3",
      ],
      [
        "R1BKQ2RPPPP3P2N2P24PP4p5p1Bp5p2ppppr2kqbnr",
        "Czarny bije Skoczka tracąc kluczową figurę w tej pozycji",
        "Bxf6",
      ],
      [
        "R1BKQ2RPPPP3P2N2P24PP4p5p1qp5p2ppppr2k1bnr",
        "Odbijamy hetmanem",
        "Qxf6",
      ],
      [
        "R1BKQ2RPPP4P2NP1P24PP4p5p1qp5p2ppppr2k1bnr",
        "Białe grają e3, przygotowując rozwój gońca i krótką roszadę",
        "e3",
      ],
      [
        "R1BKQ2RPPP4P2NP1P24PP4p5p1qp5p2pppp1kr2bnr",
        "Roszujemy ciesząc się przyjemną do grania pozycją",
        "O-O",
      ],
    ],
  },

  vienna: {
    name: "Gambit wiedeński",
    variant: "Gambit przyjęty",
    moves: [
      ["rnbqkbnrpppppppp8888PPPPPPPPRNBQKBNR", "Pozycja startowa", ""],
      ["rnbqkbnrpppppppp884P38PPPP1PPPRNBQKBNR", "Otwieramy ruchem e4", "e4"],
      [
        "rnbqkbnrpppp1ppp84p34P38PPPP1PPPRNBQKBNR",
        "Czarny odpowiada popularnym e5",
        "e5",
      ],
      [
        "rnbqkbnrpppp1ppp84p34P32N5PPPP1PPPR1BQKBNR",
        "Rozwijamy skoczka ze skrzydła hetmańskiego zamiast bardziej standardowego Nf3",
        "Nc3",
      ],
      [
        "rnbqkb1rpppp1ppp5n24p34P32N5PPPP1PPPR1BQKBNR",
        "Czarny odpowiada rozwijając swojego skoczka",
        "Nf6",
      ],
      [
        "rnbqkb1rpppp1ppp5n24p34PP4N5PPPP2PPR1BQKBNR",
        "Oferujemy czarnym piona w zamian za atak na skoczka i kompletne przejęcie inicjatywy",
        "f4",
      ],

      [
        "rnbqkb1rpppp1ppp5n284Pp4N5PPPP2PPR1BQKBNR",
        "Czarny wybija piona oferując nam przewagę już w 3 ruchu",
        "exf4",
      ],

      [
        "rnbqkb1rpppp1ppp5n24P341p4N5PPPP2PPR1BQKBNR",
        "Atakujemy skoczka przeciwnika",
        "e5",
      ],
      [
        "rnbqkbnrpppp1ppp84P341p4N5PPPP2PPR1BQKBNR",
        "Czarny musi wycofać swoją figurę",
        "Ng8",
      ],
      [
        "rnbqkbnrpppp1ppp84P341p4N2N2PPPP2PPR1BQKB1R",
        "Konieczny do zagrania ruch broniący przed Qh4+",
        "Nf3",
      ],
      [
        "rnbqkbnrppp2ppp3p8P341p4N2N2PPPP2PPR1BQKB1R",
        "Przeciwnik atakuje centrum i próbuje rozwinąć swojego białopolowego gońca",
        "d6",
      ],
      [
        "rnbqkbnrppp2ppp3p8P6P1p4N2N2PPP3PPR1BQKB1R",
        "Wzmacniamy centrum",
        "d4",
      ],
      ["rnbqkbnrppp2ppp48p6P1p4N2N2PPP3PPR1BQKB1R", "Czarny wybija", "dxe5"],
      [
        "rnbqkbnrppp2ppp48p6P1p4N2N2PPP1Q1PPR1B1KB1R",
        "Nie musimy spieszyć się z odbijaniem, Qe2 pozwala nam uniknąć wymiany hetmanów i daje możliwości agresywnego wybicia Bxf4 w następnym ruchu",
        "Qe2",
      ],
      [
        "r1bqkbnrppp2ppp2n18p6P1p4N2N2PPP1Q1PPR1B1KB1R",
        "Najbardziej standardowa odpowiedź",
        "Nc6",
      ],
      [
        "r1bqkbnrppp2ppp2n18p6P1B4N2N2PPP1Q1PPR3KB1R",
        "Odbijamy piona i cieszymy się przewagą zdobytą w debiucie",
        "Gxf4",
      ],
    ],
  },
};
