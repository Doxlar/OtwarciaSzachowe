const mode = "practice";

const openings = {
  dutch: [
    {
      name: "Obrona holenderska",
      variant: "Wariant główny z pionem f5",
      fen: "R2K3RPBPP2P2PN2Q1P4P5p2P5pp1p1pp3pbp1kr1q1nr",
      comment:
        "Biały właśnie pchnął piona z c4 na c5, jaka powinna być nasza odpowiedź?",
      answers: [
        [
          "Nd7, rozwinięcie skoczka",
          "Błędna odpowiedź, tracimy materiał po c6",
          false,
        ],
        [
          "dxc5, zbicie w kierunku przeciwnym do centrum",
          "Błędna odpowiedź, zniszczymy w ten sposób naszą strukturę pionową",
          false,
        ],
        [
          "Be4, ustawienie gońca w centrum",
          "Poprawna odpowiedź, uciekamy przed groźbami na c6 i upewniamy się że będziemy w stanie wymienić silnego gońca białego",
          true,
        ],
      ],
    },
    {
      name: "Obrona holenderska",
      variant: "Wariant główny z pionem f5",
      fen: "R1BKQ2RPPPP2PP2N2N4B1PPb3p7np4pp2ppppr2kqbnr",
      comment: "Biały rozwija swojego gońca na f4, co powinniśmy zagrać?",
      answers: [
        [
          "Bxc3+, rozbijając strukturę pionową przeciwnika",
          "Poprawna odpowiedź, rozbijamy strukturę pionową przeciwnika i umacniamy naszą kontrolę nad polem e4",
          true,
        ],
        [
          "c5, atakując centralne piony przeciwnika",
          "Błędna odpowiedź, biały odpowiednio broni swojego centrum ruch pionem c niczym nie grozi",
          false,
        ],
        [
          "Qe7, tworząc baterię z gońcem",
          "Błędna odpowiedź, pozbawiamy piona c obrony pozwalając przeciwnikowi zdobyć go za darmo",
          false,
        ],
      ],
    },
    {
      name: "Obrona holenderska",
      variant: "Wariant główny z pionem f5",
      fen: "1KR1Q2RPPP4P2NPBP4B1PP4p7np2p1pp2ppbp1kr1q1nr",
      comment: "Biały zroszował, jak powinniśmy tu zagrać?",
      answers: [
        [
          "d6, walcząc o kontrolęnad polem e5",
          "Poprawna odpowiedź, kontrola nad e5 jest w tej pozycji bardzo wartościowa, dodatkowo dajemy naszym fidurom miejsce na rozwój",
          true,
        ],
        [
          "h6, przygotowanie ruchu g5 wypychając gońca",
          "Błędna odpowiedź, potrzebujemy rozwinąć nasze figury przed takim atakiem",
          false,
        ],
        [
          "Nc6, rozwijając skoczka",
          "Błędna odpowiedź, w obronie holenderskiej skoczek lepiej radzi sobie na polu d7",
          false,
        ],
      ],
    },
  ],

  vienna: [
    {
      name: "Gambit wiedeński",
      variant: "Gambit przyjęty",
      fen: "rnbqkbnrpppp1ppp84P8p4N5PPPP2PPR1BQKBNR",
      comment:
        "Czarny wycofał swojego skoczka na g8, jaki jest nasz najlepszy plan działania?",
      answers: [
        [
          "d4, ustabilizowanie centrum",
          "Błędna odpowiedź, pozwalamy na Qh4+",
          false,
        ],
        [
          "Nf3, rozwijamy skoczka",
          "Poprawna odpowiedź, rozwijamy figurę zabezpieczając się przed Qh4+",
          true,
        ],
        ["Bc4, rozwijamy gońca", "Błędna odpowiedź, pozwalamy na Qh4+", false],
      ],
    },
    {
      name: "Gambit wiedeński",
      variant: "Gambit przyjęty",
      fen: "rnbqkbnrppp2ppp84p6P1p4N2N2PPP3PPR1BQKB1R",
      comment: "Czarny odbił piona na e5, jak powinniśmy odpowiedzieć?",
      answers: [
        [
          "dxe5, odbijamy pionem",
          "Błędna odpowiedź, pozwalamy czarnemu na wymianę hetmanów i tracimy inicjatywę",
          false,
        ],
        [
          "Nxe5, odbijamy skoczkiem",
          "Błędna odpowiedź, zbyt pochopne można to rozegrać lepiej",
          false,
        ],
        [
          "Qe2, wiążąc piona",
          "Poprawna odpowiedź, wiążemy piona ustawiając się na bardziej agresywne odbicia materiału typu Gxf4",
          true,
        ],
      ],
    },
    {
      name: "Gambit wiedeński",
      variant: "Gambit przyjęty",
      fen: "r1bqkbnrppp2ppp2np8P6P1p4N2N2PPP3PPR1BQKB1R",
      comment:
        "Czarny atakuje centrum ruchem d6, jaka powinna być nasza reakcja?",
      answers: [
        [
          "exd6, wybijamy piona d6",
          "Błędna odpowiedź, pozwalamy czarnemu na rozwój",
          false,
        ],
        [
          "Bxf4, wybijamy piona f4",
          "Poprawna odpowiedź, odbijamy piona i wzmacniamy nasze centrum",
          true,
        ],
        [
          "Bb5, wiążąc skoczka",
          "Błędna odpowiedź, to związanie nie zapewnia nam nic wartościowego",
          false,
        ],
      ],
    },
  ],
};
