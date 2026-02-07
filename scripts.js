/* =========================================
   1. THE VOCABULARY LIBRARY (The Data)
   Defines every word once.
   ========================================= */
const vocabularyLibrary = {
  //PALAVRAS QUE ESCAPARAM
    "foram": { type: "verbo", def: "Verbo SER/IR no pretérito perfeito (plural)", eng: "were/went" },
    "mim": { type: "pronome", def: "Pronome pessoal (após preposição)", eng: "me" },
    "vista": { type: "substantivo", def: "Ato de ver, observação", eng: "sight/view" },
    "tal": { type: "pronome", def: "Tal coisa, semelhante", eng: "such" },
    "muita": { type: "pronome", def: "Grande quantidade (feminino)", eng: "much/many" },
    "nível": { type: "substantivo", def: "Grau, altura", eng: "level" },
    "falava": { type: "verbo", def: "Verbo FALAR no pretérito imperfeito", eng: "spoke/was speaking" },
    "adulto": { type: "substantivo", def: "Pessoa crescida", eng: "adult" },
    "sensível": { type: "adjetivo", def: "Que sente facilmente", eng: "sensitive" },
    "quaisquer": { type: "pronome", def: "Plural de qualquer", eng: "any/whatever" },
    "fui": { type: "verbo", def: "Verbo SER/IR no pretérito perfeito", eng: "was/went" },
    "quê": { type: "pronome", def: "O quê? (interrogativo)", eng: "what?" },
    "tantas": { type: "pronome", def: "Grande quantidade (feminino plural)", eng: "so many" },
    "viu": { type: "verbo", def: "Verbo VER no pretérito perfeito", eng: "saw" },
    "seguida": { type: "substantivo", def: "Em seguida - logo após", eng: "following/next" },
    "saber": { type: "verbo", def: "Verbo SABER (infinitivo)", eng: "to know" },
    "mora": { type: "verbo", def: "Verbo MORAR no presente", eng: "lives" },
    "vagar": { type: "verbo", def: "Verbo VAGAR (infinitivo) - andar sem rumo", eng: "to wander" },
    "esmo": { type: "advérbio", def: "Ao acaso (à esmo)", eng: "randomly" },
    "surpreendeu": { type: "verbo", def: "Verbo SURPREENDER no pretérito perfeito", eng: "surprised" },
    "demos": { type: "verbo", def: "Verbo DAR no pretérito perfeito (plural)", eng: "gave" },
    "chamá-lo": { type: "verbo", def: "Verbo CHAMAR + pronome LO", eng: "to call it" },
    "B-": { type: "substantivo", def: "Letra/código de classificação", eng: "B-" },
    "seus": { type: "pronome", def: "Pronome possessivo (plural)", eng: "his/her/their" },
    "Será": { type: "verbo", def: "Verbo SER no futuro", eng: "will be" },
    "alguma": { type: "pronome", def: "Determinada (feminino)", eng: "some" },
    "dissesse": { type: "verbo", def: "Verbo DIZER no pretérito imperfeito do subjuntivo", eng: "said/were to say" },
    "teve": { type: "verbo", def: "Verbo TER no pretérito perfeito", eng: "had" },
    // --- ARTIGOS & PRONOMES ---
    "o": { type: "pronome", def: "Artigo definido masculino", eng: "the" },
    "a": { type: "pronome", def: "Artigo definido feminino", eng: "the" },
    "um": { type: "pronome", def: "Artigo indefinido masculino", eng: "a/an" },
    "uma": { type: "pronome", def: "Artigo indefinido feminino", eng: "a/an" },
    "uns": { type: "pronome", def: "Artigo indefinido masculino plural", eng: "some" },
    "umas": { type: "pronome", def: "Artigo indefinido feminino plural", eng: "some" },
    "eu": { type: "pronome", def: "Primeira pessoa do singular", eng: "I" },
    "ele": { type: "pronome", def: "Pronome pessoal masculino", eng: "he" },
    "ela": { type: "pronome", def: "Pronome pessoal feminino", eng: "she" },
    "eles": { type: "pronome", def: "Pronome pessoal masculino plural", eng: "they" },
    "elas": { type: "pronome", def: "Pronome pessoal feminino plural", eng: "they" },
    "me": { type: "pronome", def: "Pronome pessoal", eng: "me" },
    "te": { type: "pronome", def: "Pronome pessoal", eng: "you" },
    "se": { type: "pronome", def: "Pronome reflexivo", eng: "oneself/itself" },
    "nos": { type: "pronome", def: "Pronome pessoal", eng: "us" },
    "lhe": { type: "pronome", def: "Pronome pessoal", eng: "to him/her" },
    "lhes": { type: "pronome", def: "Pronome pessoal", eng: "to them" },
    "meu": { type: "pronome", def: "Pronome possessivo masculino", eng: "my" },
    "minha": { type: "pronome", def: "Pronome possessivo feminino", eng: "my" },
    "meus": { type: "pronome", def: "Pronome possessivo plural", eng: "my" },
    "minhas": { type: "pronome", def: "Pronome possessivo feminino plural", eng: "my" },
    "seu": { type: "pronome", def: "Pronome possessivo", eng: "his/her/your" },
    "sua": { type: "pronome", def: "Pronome possessivo feminino", eng: "his/her/your" },
    "suas": { type: "pronome", def: "Pronome possessivo feminino plural", eng: "their/your" },
    "isso": { type: "pronome", def: "Pronome demonstrativo", eng: "that" },
    "isto": { type: "pronome", def: "Pronome demonstrativo", eng: "this" },
    "aquilo": { type: "pronome", def: "Pronome demonstrativo", eng: "that over there" },
    "este": { type: "pronome", def: "Pronome demonstrativo masculino", eng: "this" },
    "esta": { type: "pronome", def: "Pronome demonstrativo feminino", eng: "this" },
    "esse": { type: "pronome", def: "Pronome demonstrativo", eng: "that" },
    "essa": { type: "pronome", def: "Pronome demonstrativo", eng: "that" },
    "esses": { type: "pronome", def: "Pronome demonstrativo plural", eng: "those" },
    "essas": { type: "pronome", def: "Pronome demonstrativo feminino plural", eng: "those" },
    "aquele": { type: "pronome", def: "Pronome demonstrativo", eng: "that one" },
    "aqueles": { type: "pronome", def: "Pronome demonstrativo plural", eng: "those" },
    "algo": { type: "pronome", def: "Alguma coisa", eng: "something" },
    "alguém": { type: "pronome", def: "Alguma pessoa", eng: "someone" },
    "ninguém": { type: "pronome", def: "Nenhuma pessoa", eng: "nobody" },
    "tudo": { type: "pronome", def: "Todas as coisas", eng: "everything" },
    "nada": { type: "pronome", def: "Coisa alguma", eng: "nothing" },
    "qualquer": { type: "pronome", def: "Seja qual for", eng: "any" },
    "outra": { type: "pronome", def: "Diferente, adicional", eng: "another" },
    "outro": { type: "pronome", def: "Diferente, adicional", eng: "another" },
    "outros": { type: "pronome", def: "Demais, restantes", eng: "others" },
    "você": { type: "pronome", def: "Pronome de tratamento", eng: "you" },
    "quem": { type: "pronome", def: "Pronome interrogativo", eng: "who" },
    "que": { type: "pronome", def: "Pronome relativo/interrogativo", eng: "what/that/who" },
    "quais": { type: "pronome", def: "Pronome relativo plural", eng: "which" },
    "quantos": { type: "pronome", def: "Pronome interrogativo", eng: "how many" },
    "quanto": { type: "pronome", def: "Pronome interrogativo", eng: "how much" },
    "nós": { type: "pronome", def: "Primeira pessoa do plural", eng: "we" },
    "algum": { type: "pronome", def: "Quantidade indefinida", eng: "some" },
    "alguns": { type: "pronome", def: "Certa quantidade", eng: "some" },
    "muitas": { type: "pronome", def: "Grande quantidade", eng: "many" },
    "muitos": { type: "pronome", def: "Grande quantidade", eng: "many" },
    "todo": { type: "pronome", def: "Inteiro, completo", eng: "all/every" },
    "os": { type: "pronome", def: "Artigo definido masculino plural", eng: "the" },
    "as": { type: "pronome", def: "Artigo definido feminino plural", eng: "the" },
    "o quê": { type: "pronome", def: "Pronome interrogativo", eng: "what" },
    "qual": { type: "pronome", def: "Pronome interrogativo", eng: "what/which" },

    // --- SUBSTANTIVOS ---
    "jiboia": { type: "substantivo", def: "Serpente grande da América", eng: "boa constrictor" },
    "jiboias": { type: "substantivo", def: "Plural de jiboia", eng: "boa constrictors" },
    "elefante": { type: "substantivo", def: "Mamífero grande com tromba", eng: "elephant" },
    "desenho": { type: "substantivo", def: "Imagem feita à mão", eng: "drawing" },
    "desenhos": { type: "substantivo", def: "Plural de desenho", eng: "drawings" },
    "chapéu": { type: "substantivo", def: "Peça que cobre a cabeça", eng: "hat" },
    "adultos": { type: "substantivo", def: "Pessoas crescidas", eng: "adults" },
    "livro": { type: "substantivo", def: "Obra escrita com páginas", eng: "book" },
    "imagem": { type: "substantivo", def: "Figura, ilustração, foto", eng: "image" },
    "imagens": { type: "substantivo", def: "Plural de imagem", eng: "images" },
    "histórias": { type: "substantivo", def: "Narrativas, contos", eng: "stories" },
    "história": { type: "substantivo", def: "Narrativa, relato", eng: "story" },
    "natureza": { type: "substantivo", def: "Mundo natural, ambiente", eng: "nature" },
    "floresta": { type: "substantivo", def: "Grande área com muitas árvores", eng: "forest" },
    "florestas": { type: "substantivo", def: "Plural de floresta", eng: "forests" },
    "selva": { type: "substantivo", def: "Floresta tropical densa", eng: "jungle" },
    "foto": { type: "substantivo", def: "Fotografia, imagem", eng: "photo" },
    "ato": { type: "substantivo", def: "Ação, momento de fazer algo", eng: "act" },
    "animal": { type: "substantivo", def: "Ser vivo não humano", eng: "animal" },
    "presa": { type: "substantivo", def: "Animal caçado", eng: "prey" },
    "digestão": { type: "substantivo", def: "Processo de digerir alimentos", eng: "digestion" },
    "aventuras": { type: "substantivo", def: "Experiências emocionantes", eng: "adventures" },
    "trabalho": { type: "substantivo", def: "Atividade, esforço", eng: "work" },
    "lápis": { type: "substantivo", def: "Instrumento para escrever", eng: "pencil" },
    "cor": { type: "substantivo", def: "Tonalidade, pigmento", eng: "color" },
    "número": { type: "substantivo", def: "Algarismo, valor numérico", eng: "number" },
    "números": { type: "substantivo", def: "Algarismos, valores numéricos", eng: "numbers" },
    "obra-prima": { type: "substantivo", def: "Trabalho excepcional", eng: "masterpiece" },
    "medo": { type: "substantivo", def: "Sentimento de temor", eng: "fear" },
    "interior": { type: "substantivo", def: "Parte de dentro", eng: "interior" },
    "coisas": { type: "substantivo", def: "Objetos, assuntos", eng: "things" },
    "coisa": { type: "substantivo", def: "Objeto, algo", eng: "thing" },
    "resposta": { type: "substantivo", def: "Reação, contestação", eng: "answer" },
    "lado": { type: "substantivo", def: "Parte lateral", eng: "side" },
    "preferência": { type: "substantivo", def: "Escolha favorita", eng: "preference" },
    "geografia": { type: "substantivo", def: "Estudo da Terra", eng: "geography" },
    "aritmética": { type: "substantivo", def: "Matemática básica", eng: "arithmetic" },
    "gramática": { type: "substantivo", def: "Regras da língua", eng: "grammar" },
    "idade": { type: "substantivo", def: "Tempo de vida", eng: "age" },
    "carreira": { type: "substantivo", def: "Profissão, ocupação", eng: "career" },
    "pintor": { type: "substantivo", def: "Artista que pinta", eng: "painter" },
    "fracasso": { type: "substantivo", def: "Falta de sucesso", eng: "failure" },
    "pessoas": { type: "substantivo", def: "Seres humanos", eng: "people" },
    "crianças": { type: "substantivo", def: "Pessoas jovens", eng: "children" },
    "criança": { type: "substantivo", def: "Pessoa jovem", eng: "child" },
    "profissão": { type: "substantivo", def: "Ocupação, trabalho", eng: "profession" },
    "aviões": { type: "substantivo", def: "Plural de avião", eng: "airplanes" },
    "avião": { type: "substantivo", def: "Veículo que voa", eng: "airplane" },
    "redor": { type: "substantivo", def: "Em volta", eng: "around" },
    "mundo": { type: "substantivo", def: "Planeta Terra", eng: "world" },
    "verdade": { type: "substantivo", def: "Realidade, fato", eng: "truth" },
    "china": { type: "substantivo", def: "País asiático", eng: "China" },
    "arizona": { type: "substantivo", def: "Estado dos EUA", eng: "Arizona" },
    "noite": { type: "substantivo", def: "Período escuro do dia", eng: "night" },
    "conhecimento": { type: "substantivo", def: "Informação, saber", eng: "knowledge" },
    "vida": { type: "substantivo", def: "Existência", eng: "life" },
    "contatos": { type: "substantivo", def: "Relações, encontros", eng: "contacts" },
    "gente": { type: "substantivo", def: "Pessoas", eng: "people" },
    "negócios": { type: "substantivo", def: "Assuntos comerciais", eng: "business" },
    "opinião": { type: "substantivo", def: "Ponto de vista", eng: "opinion" },
    "experiência": { type: "substantivo", def: "Teste, vivência", eng: "experience" },
    "pessoa": { type: "substantivo", def: "Ser humano", eng: "person" },
    "compreensão": { type: "substantivo", def: "Entendimento", eng: "understanding" },
    "estrelas": { type: "substantivo", def: "Astros luminosos", eng: "stars" },
    "pontes": { type: "substantivo", def: "Estruturas sobre rios", eng: "bridges" },
    "golfe": { type: "substantivo", def: "Esporte com tacadas", eng: "golf" },
    "política": { type: "substantivo", def: "Governo, assuntos públicos", eng: "politics" },
    "gravatas": { type: "substantivo", def: "Acessório de pescoço", eng: "ties" },
    "homem": { type: "substantivo", def: "Pessoa do sexo masculino", eng: "man" },
    "acidente": { type: "substantivo", def: "Evento inesperado e prejudicial", eng: "accident" },
    "deserto": { type: "substantivo", def: "Região árida com pouca vida", eng: "desert" },
    "saara": { type: "substantivo", def: "Grande deserto na África", eng: "Sahara" },
    "motor": { type: "substantivo", def: "Máquina que produz movimento", eng: "engine" },
    "mecânico": { type: "substantivo", def: "Profissional de máquinas", eng: "mechanic" },
    "passageiros": { type: "substantivo", def: "Pessoas que viajam", eng: "passengers" },
    "reparos": { type: "substantivo", def: "Consertos, ajustes", eng: "repairs" },
    "questão": { type: "substantivo", def: "Assunto, problema", eng: "question/matter" },
    "questões": { type: "substantivo", def: "Perguntas, assuntos", eng: "questions" },
    "morte": { type: "substantivo", def: "Fim da vida", eng: "death" },
    "água": { type: "substantivo", def: "Líquido transparente essencial", eng: "water" },
    "dia": { type: "substantivo", def: "Período de luz solar", eng: "day" },
    "dias": { type: "substantivo", def: "Plural de dia", eng: "days" },
    "areia": { type: "substantivo", def: "Grãos finos de rocha", eng: "sand" },
    "areias": { type: "substantivo", def: "Plural de areia", eng: "sands" },
    "milhares": { type: "substantivo", def: "Muitos milhares", eng: "thousands" },
    "quilômetros": { type: "substantivo", def: "Unidade de distância (1000m)", eng: "kilometers" },
    "habitação": { type: "substantivo", def: "Local onde se mora", eng: "dwelling" },
    "náufrago": { type: "substantivo", def: "Pessoa que sobreviveu a naufrágio", eng: "castaway" },
    "jangada": { type: "substantivo", def: "Embarcação simples", eng: "raft" },
    "meio": { type: "substantivo", def: "Centro, metade", eng: "middle" },
    "oceano": { type: "substantivo", def: "Grande massa de água salgada", eng: "ocean" },
    "espanto": { type: "substantivo", def: "Surpresa grande", eng: "astonishment" },
    "sol": { type: "substantivo", def: "Estrela que ilumina a Terra", eng: "sun" },
    "voz": { type: "substantivo", def: "Som produzido ao falar", eng: "voice" },
    "favor": { type: "substantivo", def: "Pedido cortês", eng: "favor" },
    "carneiro": { type: "substantivo", def: "Ovelha macho", eng: "sheep/ram" },
    "pé": { type: "substantivo", def: "Parte do corpo para andar", eng: "foot" },
    "salto": { type: "substantivo", def: "Pulo, movimento brusco", eng: "jump" },
    "raio": { type: "substantivo", def: "Descarga elétrica atmosférica", eng: "lightning" },
    "olhos": { type: "substantivo", def: "Órgãos da visão", eng: "eyes" },
    "cuidado": { type: "substantivo", def: "Atenção, precaução", eng: "care" },
    "garotinho": { type: "substantivo", def: "Menino pequeno", eng: "little boy" },
    "seriedade": { type: "substantivo", def: "Qualidade de sério", eng: "seriousness" },
    "retrato": { type: "substantivo", def: "Imagem de pessoa", eng: "portrait" },
    "retratos": { type: "substantivo", def: "Imagens de pessoas", eng: "portraits" },
    "tarde": { type: "substantivo", def: "Posteriormente", eng: "later" },
    "modelo": { type: "substantivo", def: "Exemplo, padrão", eng: "model" },
    "culpa": { type: "substantivo", def: "Responsabilidade por erro", eng: "fault" },
    "aparição": { type: "substantivo", def: "Ato de aparecer", eng: "apparition" },
    "milhas": { type: "substantivo", def: "Unidade de distância", eng: "miles" },
    "região": { type: "substantivo", def: "Área, zona", eng: "region" },
    "cansaço": { type: "substantivo", def: "Fadiga, esgotamento", eng: "tiredness" },
    "fome": { type: "substantivo", def: "Necessidade de comer", eng: "hunger" },
    "sede": { type: "substantivo", def: "Necessidade de beber", eng: "thirst" },
    "sugestão": { type: "substantivo", def: "Indicação, sinal", eng: "suggestion" },
    "mistério": { type: "substantivo", def: "Algo misterioso", eng: "mystery" },
    "perigo": { type: "substantivo", def: "Risco, ameaça", eng: "danger" },
    "bolso": { type: "substantivo", def: "Compartimento em roupa", eng: "pocket" },
    "folha": { type: "substantivo", def: "Página, lâmina", eng: "sheet" },
    "papel": { type: "substantivo", def: "Material para escrever", eng: "paper" },
    "caneta": { type: "substantivo", def: "Instrumento para escrever", eng: "pen" },
    "tinteiro": { type: "substantivo", def: "Com tinta", eng: "ink pen" },
    "estudos": { type: "substantivo", def: "Aprendizagem", eng: "studies" },
    "pequenino": { type: "substantivo", def: "Muito pequeno", eng: "little one" },
    "ovelha": { type: "substantivo", def: "Animal mamífero", eng: "sheep" },
    "ovelhas": { type: "substantivo", def: "Plural de ovelha", eng: "sheep" },
    "amigo": { type: "substantivo", def: "Pessoa querida", eng: "friend" },
    "indulgência": { type: "substantivo", def: "Tolerância, compreensão", eng: "indulgence" },
    "bode": { type: "substantivo", def: "Cabra macho", eng: "goat" },
    "chifres": { type: "substantivo", def: "Protuberâncias na cabeça", eng: "horns" },
    "tempo": { type: "substantivo", def: "Duração", eng: "time" },
    "altura": { type: "substantivo", def: "Momento, ponto", eng: "point" },
    "paciência": { type: "substantivo", def: "Capacidade de esperar", eng: "patience" },
    "guisa": { type: "substantivo", def: "Modo, maneira", eng: "manner" },
    "explicação": { type: "substantivo", def: "Esclarecimento", eng: "explanation" },
    "caixa": { type: "substantivo", def: "Recipiente", eng: "box" },
    "caixas": { type: "substantivo", def: "Plural de caixa", eng: "boxes" },
    "rosto": { type: "substantivo", def: "Face, cara", eng: "face" },
    "jovem": { type: "substantivo", def: "Pessoa jovem", eng: "young person" },
    "juiz": { type: "substantivo", def: "Aquele que julga", eng: "judge" },
    "jeito": { type: "substantivo", def: "Maneira, modo", eng: "way" },
    "quantidade": { type: "substantivo", def: "Porção, montante", eng: "quantity" },
    "grama": { type: "substantivo", def: "Relva, capim", eng: "grass" },
    "cabeça": { type: "substantivo", def: "Parte superior do corpo", eng: "head" },
    "príncipe": { type: "substantivo", def: "Filho de rei", eng: "prince" },
    "principezinho": { type: "substantivo", def: "Pequeno príncipe", eng: "little prince" },
    "perguntas": { type: "substantivo", def: "Questões, interrogações", eng: "questions" },
    "palavras": { type: "substantivo", def: "Unidades da fala", eng: "words" },
    "acaso": { type: "substantivo", def: "Por coincidência", eng: "random" },
    "vez": { type: "substantivo", def: "Ocasião, momento específico", eng: "time" },
    "vezes": { type: "substantivo", def: "Plural de vez", eng: "times" },
    "exemplo": { type: "substantivo", def: "Modelo, caso", eng: "example" },
    "aeronave": { type: "substantivo", def: "Veículo aéreo", eng: "aircraft" },
    "céu": { type: "substantivo", def: "Espaço acima da Terra", eng: "sky" },
    "modéstia": { type: "substantivo", def: "Humildade", eng: "modesty" },
    "risada": { type: "substantivo", def: "Gargalhada, riso", eng: "laugh" },
    "infortúnios": { type: "substantivo", def: "Desgraças, infelicidades", eng: "misfortunes" },
    "planeta": { type: "substantivo", def: "Corpo celeste", eng: "planet" },
    "planetas": { type: "substantivo", def: "Plural de planeta", eng: "planets" },
    "momento": { type: "substantivo", def: "Instante, ocasião", eng: "moment" },
    "luz": { type: "substantivo", def: "Claridade, iluminação", eng: "light" },
    "presença": { type: "substantivo", def: "Ato de estar presente", eng: "presence" },
    "devaneio": { type: "substantivo", def: "Estado de sonho acordado", eng: "reverie" },
    "contemplação": { type: "substantivo", def: "Ato de contemplar", eng: "contemplation" },
    "tesouro": { type: "substantivo", def: "Bem precioso", eng: "treasure" },
    "curiosidade": { type: "substantivo", def: "Desejo de saber", eng: "curiosity" },
    "confiança": { type: "substantivo", def: "Revelação, confidência", eng: "confidence" },
    "esforço": { type: "substantivo", def: "Empenho, tentativa", eng: "effort" },
    "assunto": { type: "substantivo", def: "Tema, matéria", eng: "subject" },
    "rapazinho": { type: "substantivo", def: "Menino, garoto", eng: "little boy" },
    "lugar": { type: "substantivo", def: "Local, sítio", eng: "place" },
    "silêncio": { type: "substantivo", def: "Ausência de som", eng: "silence" },
    "vantagem": { type: "substantivo", def: "Benefício, proveito", eng: "advantage" },
    "casa": { type: "substantivo", def: "Habitação, lar", eng: "house" },
    "corda": { type: "substantivo", def: "Cabo, fio grosso", eng: "rope" },
    "estaca": { type: "substantivo", def: "Pau fincado no chão", eng: "stake" },
    "oferta": { type: "substantivo", def: "Proposta, oferecimento", eng: "offer" },
    "ideia": { type: "substantivo", def: "Pensamento, conceito", eng: "idea" },
    "gargalhada": { type: "substantivo", def: "Risada alta", eng: "laugh" },
    "sinceridade": { type: "substantivo", def: "Honestidade, franqueza", eng: "sincerity" },
    "melancolia": { type: "substantivo", def: "Tristeza suave", eng: "melancholy" },
    "frente": { type: "substantivo", def: "Parte da frente, adiante", eng: "forward" },
    "fato": { type: "substantivo", def: "Acontecimento, ocorrência", eng: "fact" },
    "relevância": { type: "substantivo", def: "Importância", eng: "relevance" },
    "terra": { type: "substantivo", def: "Planeta onde vivemos", eng: "Earth" },
    "júpiter": { type: "substantivo", def: "Planeta do sistema solar", eng: "Jupiter" },
    "marte": { type: "substantivo", def: "Planeta do sistema solar", eng: "Mars" },
    "vênus": { type: "substantivo", def: "Planeta do sistema solar", eng: "Venus" },
    "nomes": { type: "substantivo", def: "Plural de nome", eng: "names" },
    "nome": { type: "substantivo", def: "Designação", eng: "name" },
    "centenas": { type: "substantivo", def: "Muitas centenas", eng: "hundreds" },
    "telescópio": { type: "substantivo", def: "Instrumento para observar astros", eng: "telescope" },
    "astrônomo": { type: "substantivo", def: "Cientista que estuda astros", eng: "astronomer" },
    "asteroide": { type: "substantivo", def: "Pequeno corpo celeste", eng: "asteroid" },
    "motivos": { type: "substantivo", def: "Razões, causas", eng: "reasons" },
    "origem": { type: "substantivo", def: "Procedência, fonte", eng: "origin" },
    "demonstração": { type: "substantivo", def: "Apresentação, exibição", eng: "demonstration" },
    "descoberta": { type: "substantivo", def: "Ato de descobrir", eng: "discovery" },
    "congresso": { type: "substantivo", def: "Reunião, assembleia", eng: "congress" },
    "astronomia": { type: "substantivo", def: "Ciência dos astros", eng: "astronomy" },
    "causa": { type: "substantivo", def: "Razão, motivo", eng: "cause" },
    "trajes": { type: "substantivo", def: "Roupas, vestimentas", eng: "clothes" },
    "roupa": { type: "substantivo", def: "Vestimenta", eng: "clothes" },
    "reputação": { type: "substantivo", def: "Fama, renome", eng: "reputation" },
    "ditador": { type: "substantivo", def: "Governante autoritário", eng: "dictator" },
    "súditos": { type: "substantivo", def: "Cidadãos sob autoridade", eng: "subjects" },
    "pena": { type: "substantivo", def: "Punição, castigo", eng: "penalty" },
    "estilo": { type: "substantivo", def: "Modo, maneira", eng: "style" },
    "elegância": { type: "substantivo", def: "Refinamento, bom gosto", eng: "elegance" },
    "relatório": { type: "substantivo", def: "Documento com informações", eng: "report" },
    "detalhes": { type: "substantivo", def: "Pormenores, particularidades", eng: "details" },
    "nota": { type: "substantivo", def: "Anotação, registro", eng: "note" },
    "hábitos": { type: "substantivo", def: "Costumes, práticas", eng: "habits" },
    "som": { type: "substantivo", def: "Ruído, barulho", eng: "sound" },
    "jogos": { type: "substantivo", def: "Brincadeiras, diversões", eng: "games" },
    "borboletas": { type: "substantivo", def: "Insetos com asas coloridas", eng: "butterflies" },
    "irmãos": { type: "substantivo", def: "Filhos dos mesmos pais", eng: "brothers" },
    "dinheiro": { type: "substantivo", def: "Moeda, capital", eng: "money" },
    "pai": { type: "substantivo", def: "Progenitor masculino", eng: "father" },
    "tijolos": { type: "substantivo", def: "Blocos de construção", eng: "bricks" },
    "gerânios": { type: "substantivo", def: "Tipo de flores", eng: "geraniums" },
    "janelas": { type: "substantivo", def: "Aberturas na parede", eng: "windows" },
    "pombas": { type: "substantivo", def: "Aves", eng: "doves" },
    "telhado": { type: "substantivo", def: "Cobertura da casa", eng: "roof" },
    "francos": { type: "substantivo", def: "Moeda francesa", eng: "francs" },
    "forma": { type: "substantivo", def: "Maneira, modo", eng: "way/form" },
    "prova": { type: "substantivo", def: "Evidência, demonstração", eng: "proof" },
    "ombros": { type: "substantivo", def: "Parte do corpo", eng: "shoulders" },
    "paz": { type: "substantivo", def: "Tranquilidade, sossego", eng: "peace" },
    "conto": { type: "substantivo", def: "Narrativa curta", eng: "tale" },
    "fadas": { type: "substantivo", def: "Seres mágicos", eng: "fairies" },
    "ar": { type: "substantivo", def: "Aparência, aspecto", eng: "air" },
    "memórias": { type: "substantivo", def: "Lembranças, recordações", eng: "memories" },
    "tintas": { type: "substantivo", def: "Substâncias para colorir", eng: "paints" },
    "exceção": { type: "substantivo", def: "Exclusão, salvaguarda", eng: "exception" },
    "certeza": { type: "substantivo", def: "Segurança, convicção", eng: "certainty" },
    "sucesso": { type: "substantivo", def: "Êxito, resultado positivo", eng: "success" },
    "semelhança": { type: "substantivo", def: "Parecença, similitude", eng: "resemblance" },
    "sujeito": { type: "substantivo", def: "Tema, assunto", eng: "subject" },
    "tamanho": { type: "substantivo", def: "Dimensão, grandeza", eng: "size" },
    "maneira": { type: "substantivo", def: "Modo, forma", eng: "way" },
    "erros": { type: "substantivo", def: "Enganos, falhas", eng: "errors" },
    "anos": { type: "substantivo", def: "Unidade de tempo (365 dias)", eng: "years" },
    "meses": { type: "substantivo", def: "Unidade de tempo (30 dias)", eng: "months" },
    "companheiro": { type: "substantivo", def: "Amigo, parceiro", eng: "companion" },
    "criatura": { type: "substantivo", def: "Ser vivo", eng: "creature" },
    "paredes": { type: "substantivo", def: "Estruturas verticais", eng: "walls" },
    "seis": { type: "substantivo", def: "Número 6", eng: "six" },
    "oito": { type: "substantivo", def: "Número 8", eng: "eight" },
    "dois": { type: "substantivo", def: "Número 2", eng: "two" },
    "mil": { type: "substantivo", def: "Número 1000", eng: "thousand" },
    "cem": { type: "substantivo", def: "Número 100", eng: "hundred" },
    "ei": { type: "substantivo", def: "Interjeição", eng: "hey" },
    "oh": { type: "substantivo", def: "Interjeição", eng: "oh" },
"conversas": { type: "substantivo", def: "Diálogos, trocas de palavras", eng: "conversations" },
"partida": { type: "substantivo", def: "Saída, despedida", eng: "departure" },
"jornada": { type: "substantivo", def: "Viagem, percurso", eng: "journey" },
"informações": { type: "substantivo", def: "Dados, conhecimentos", eng: "information" },
"maneira": { type: "substantivo", def: "Modo, forma", eng: "way" },
"reflexões": { type: "substantivo", def: "Pensamentos profundos", eng: "reflections" },
"terceiro": { type: "substantivo", def: "Número 3 em ordem", eng: "third" },
"catástrofe": { type: "substantivo", def: "Desastre, tragédia", eng: "catastrophe" },
"baobás": { type: "substantivo", def: "Árvores africanas gigantes", eng: "baobabs" },
"baobá": { type: "substantivo", def: "Árvore africana gigante", eng: "baobab" },
"dúvida": { type: "substantivo", def: "Incerteza, hesitação", eng: "doubt" },
"arbustos": { type: "substantivo", def: "Plantas pequenas e ramificadas", eng: "bushes" },
"arbusto": { type: "substantivo", def: "Planta pequena e ramificada", eng: "bush" },
"comentário": { type: "substantivo", def: "Observação, nota", eng: "comment" },
"castelos": { type: "substantivo", def: "Fortificações medievais", eng: "castles" },
"manada": { type: "substantivo", def: "Grupo de animais", eng: "herd" },
"rebanho": { type: "substantivo", def: "Conjunto de ovelhas ou gado", eng: "flock" },
"risadinha": { type: "substantivo", def: "Riso pequeno", eng: "little laugh" },
"problema": { type: "substantivo", def: "Dificuldade, questão", eng: "problem" },
"assistência": { type: "substantivo", def: "Ajuda, auxílio", eng: "assistance" },
"plantas": { type: "substantivo", def: "Vegetais, flora", eng: "plants" },
"planta": { type: "substantivo", def: "Vegetal, flora", eng: "plant" },
"ervas": { type: "substantivo", def: "Plantas pequenas", eng: "herbs" },
"consequência": { type: "substantivo", def: "Resultado, efeito", eng: "consequence" },
"sementes": { type: "substantivo", def: "Grãos que originam plantas", eng: "seeds" },
"semente": { type: "substantivo", def: "Grão que origina planta", eng: "seed" },
"segredo": { type: "substantivo", def: "Mistério, confidência", eng: "secret" },
"segredos": { type: "substantivo", def: "Mistérios, confidências", eng: "secrets" },
"coração": { type: "substantivo", def: "Órgão vital, sentimentos", eng: "heart" },
"trevas": { type: "substantivo", def: "Escuridão, escuro", eng: "darkness" },
"desejo": { type: "substantivo", def: "Vontade, anseio", eng: "desire" },
"raminho": { type: "substantivo", def: "Pequeno ramo", eng: "little branch" },
"cima": { type: "substantivo", def: "Parte superior", eng: "top" },
"direção": { type: "substantivo", def: "Sentido, rumo", eng: "direction" },
"broto": { type: "substantivo", def: "Novo crescimento de planta", eng: "sprout" },
"brotos": { type: "substantivo", def: "Novos crescimentos de planta", eng: "sprouts" },
"rabanete": { type: "substantivo", def: "Vegetal de raiz", eng: "radish" },
"roseira": { type: "substantivo", def: "Planta que produz rosas", eng: "rose bush" },
"roseiras": { type: "substantivo", def: "Plantas que produzem rosas", eng: "rose bushes" },
"instante": { type: "substantivo", def: "Momento breve", eng: "instant" },
"lar": { type: "substantivo", def: "Casa, residência", eng: "home" },
"solo": { type: "substantivo", def: "Terra, chão", eng: "soil" },
"raízes": { type: "substantivo", def: "Partes da planta no solo", eng: "roots" },
"pedaços": { type: "substantivo", def: "Fragmentos, partes", eng: "pieces" },
"disciplina": { type: "substantivo", def: "Ordem, regra", eng: "discipline" },
"higiene": { type: "substantivo", def: "Limpeza, asseio", eng: "hygiene" },
"limpeza": { type: "substantivo", def: "Ato de limpar", eng: "cleaning" },
"mal": { type: "substantivo", def: "Dano, prejuízo", eng: "harm" },
"risco": { type: "substantivo", def: "Perigo, ameaça", eng: "risk" },
"reservas": { type: "substantivo", def: "Restrições, limites", eng: "reserves" },
"lição": { type: "substantivo", def: "Ensinamento, aprendizado", eng: "lesson" },
"senso": { type: "substantivo", def: "Sentido, percepção", eng: "sense" },
"urgência": { type: "substantivo", def: "Pressa, necessidade imediata", eng: "urgency" },
"entretenimento": { type: "substantivo", def: "Diversão, lazer", eng: "entertainment" },
"prazer": { type: "substantivo", def: "Satisfação, alegria", eng: "pleasure" },
"pôr": { type: "substantivo", def: "Ato de pôr/descer", eng: "setting" },
"detalhe": { type: "substantivo", def: "Pormenor, particularidade", eng: "detail" },
"manhã": { type: "substantivo", def: "Período da madrugada ao meio-dia", eng: "morning" },
"manhãs": { type: "substantivo", def: "Plural de manhã", eng: "mornings" },
"hora": { type: "substantivo", def: "Período de 60 minutos", eng: "hour" },
"horas": { type: "substantivo", def: "Períodos de 60 minutos", eng: "hours" },
"meio-dia": { type: "substantivo", def: "12 horas", eng: "noon" },
"estados": { type: "substantivo", def: "Países, regiões", eng: "states" },
"frança": { type: "substantivo", def: "País europeu", eng: "France" },
"minuto": { type: "substantivo", def: "Período de 60 segundos", eng: "minute" },
"minutos": { type: "substantivo", def: "Períodos de 60 segundos", eng: "minutes" },
"cadeira": { type: "substantivo", def: "Móvel para sentar", eng: "chair" },
"metros": { type: "substantivo", def: "Unidades de medida", eng: "meters" },
"crepúsculo": { type: "substantivo", def: "Período entre dia e noite", eng: "twilight" },
"pores": { type: "substantivo", def: "Plural de pôr", eng: "sunsets" },
"preâmbulos": { type: "substantivo", def: "Introduções, preliminares", eng: "preambles" },
"fruto": { type: "substantivo", def: "Resultado, produto", eng: "fruit" },
"meditação": { type: "substantivo", def: "Reflexão profunda", eng: "meditation" },
"flores": { type: "substantivo", def: "Partes coloridas das plantas", eng: "flowers" },
"flor": { type: "substantivo", def: "Parte colorida da planta", eng: "flower" },
"alcance": { type: "substantivo", def: "Extensão, capacidade", eng: "reach" },
"espinhos": { type: "substantivo", def: "Pontas afiadas nas plantas", eng: "thorns" },
"parafuso": { type: "substantivo", def: "Peça de fixação", eng: "screw" },
"quebra": { type: "substantivo", def: "Ruptura, dano", eng: "breakdown" },
"olhar": { type: "substantivo", def: "Modo de ver", eng: "look" },
"criaturas": { type: "substantivo", def: "Seres vivos", eng: "creatures" },
"armas": { type: "substantivo", def: "Instrumentos de defesa/ataque", eng: "weapons" },
"pensamentos": { type: "substantivo", def: "Ideias, reflexões", eng: "thoughts" },
"dedos": { type: "substantivo", def: "Partes da mão", eng: "fingers" },
"graxa": { type: "substantivo", def: "Lubrificante espesso", eng: "grease" },
"objeto": { type: "substantivo", def: "Coisa, item", eng: "object" },
"vergonha": { type: "substantivo", def: "Sentimento de humilhação", eng: "shame" },
"cachos": { type: "substantivo", def: "Mechas enroladas de cabelo", eng: "curls" },
"vento": { type: "substantivo", def: "Ar em movimento", eng: "wind" },
"cavalheiro": { type: "substantivo", def: "Homem educado", eng: "gentleman" },
"estrela": { type: "substantivo", def: "Corpo celeste luminoso", eng: "star" },
"orgulho": { type: "substantivo", def: "Vaidade, arrogância", eng: "pride" },
"cogumelo": { type: "substantivo", def: "Tipo de fungo", eng: "mushroom" },
"raiva": { type: "substantivo", def: "Ira, fúria", eng: "anger" },
"milhões": { type: "substantivo", def: "Muitos milhões", eng: "millions" },
"utilidade": { type: "substantivo", def: "Serventia, proveito", eng: "utility" },
"guerra": { type: "substantivo", def: "Conflito armado", eng: "war" },
"somas": { type: "substantivo", def: "Adições, cálculos", eng: "sums" },
"mordida": { type: "substantivo", def: "Ato de morder", eng: "bite" },
"conta": { type: "substantivo", def: "Percepção, conhecimento", eng: "account" },
"choro": { type: "substantivo", def: "Ato de chorar", eng: "crying" },
"ferramentas": { type: "substantivo", def: "Instrumentos de trabalho", eng: "tools" },
"braços": { type: "substantivo", def: "Membros superiores", eng: "arms" },
"mordaça": { type: "substantivo", def: "Objeto para tapar boca", eng: "muzzle" },
"cerca": { type: "substantivo", def: "Barreira, muro", eng: "fence" },
"mãos": { type: "substantivo", def: "Partes do corpo", eng: "hands" },
"lágrimas": { type: "substantivo", def: "Gotas de pranto", eng: "tears" },
"pétalas": { type: "substantivo", def: "Partes da flor", eng: "petals" },
"anel": { type: "substantivo", def: "Círculo, argola", eng: "ring" },
"grama": { type: "substantivo", def: "Relva, capim", eng: "grass" },
"aparição": { type: "substantivo", def: "Ato de aparecer", eng: "apparition" },
"botão": { type: "substantivo", def: "Flor ainda fechada", eng: "bud" },
"beleza": { type: "substantivo", def: "Qualidade do que é belo", eng: "beauty" },
"abrigo": { type: "substantivo", def: "Proteção, refúgio", eng: "shelter" },
"quarto": { type: "substantivo", def: "Cômodo para dormir", eng: "room" },
"verde": { type: "substantivo", def: "Cor da natureza", eng: "green" },
"cores": { type: "substantivo", def: "Tonalidades visuais", eng: "colors" },
"precisão": { type: "substantivo", def: "Exatidão, cuidado", eng: "precision" },
"papoulas": { type: "substantivo", def: "Tipo de flores", eng: "poppies" },
"campo": { type: "substantivo", def: "Área rural, terreno", eng: "field" },
"esplendor": { type: "substantivo", def: "Magnificência, brilho", eng: "splendor" },
"criatura": { type: "substantivo", def: "Ser vivo", eng: "creature" },
"adorno": { type: "substantivo", def: "Enfeite, decoração", eng: "adornment" },
"nascer": { type: "substantivo", def: "Início do dia", eng: "sunrise" },
"desjejum": { type: "substantivo", def: "Café da manhã", eng: "breakfast" },
"bondade": { type: "substantivo", def: "Qualidade de bondoso", eng: "kindness" },
"regador": { type: "substantivo", def: "Objeto para regar", eng: "watering can" },
"vaidade": { type: "substantivo", def: "Orgulho excessivo", eng: "vanity" },
"tigres": { type: "substantivo", def: "Grandes felinos", eng: "tigers" },
"garras": { type: "substantivo", def: "Unhas de animais", eng: "claws" },
"moita": { type: "substantivo", def: "Conjunto de plantas", eng: "bush" },
"correntes": { type: "substantivo", def: "Fluxos de ar", eng: "drafts" },
"tela": { type: "substantivo", def: "Proteção, cortina", eng: "screen" },
"horror": { type: "substantivo", def: "Aversão, medo", eng: "horror" },
"sorte": { type: "substantivo", def: "Destino, fortuna", eng: "luck" },
"domo": { type: "substantivo", def: "Cúpula de vidro", eng: "dome" },
"vidro": { type: "substantivo", def: "Material transparente", eng: "glass" },
"frio": { type: "substantivo", def: "Baixa temperatura", eng: "cold" },
"mundos": { type: "substantivo", def: "Planetas, universos", eng: "worlds" },
"mentira": { type: "substantivo", def: "Falsidade, inverdade", eng: "lie" },
"tosse": { type: "substantivo", def: "Ato de tossir", eng: "cough" },
"erro": { type: "substantivo", def: "Engano, falha", eng: "error" },
"remorso": { type: "substantivo", def: "Arrependimento", eng: "remorse" },
"vontade": { type: "substantivo", def: "Desejo, intenção", eng: "will" },
"amor": { type: "substantivo", def: "Sentimento de afeto", eng: "love" },
"confidências": { type: "substantivo", def: "Revelações íntimas", eng: "confidences" },
"atos": { type: "substantivo", def: "Ações, feitos", eng: "acts" },
"perfume": { type: "substantivo", def: "Aroma, fragrância", eng: "perfume" },
"encanto": { type: "substantivo", def: "Fascínio, sedução", eng: "charm" },
"carinho": { type: "substantivo", def: "Afeto, ternura", eng: "affection" },
"estratagemas": { type: "substantivo", def: "Artifícios, truques", eng: "stratagems" },
"fuga": { type: "substantivo", def: "Escapada, partida", eng: "escape" },
"migração": { type: "substantivo", def: "Movimento de um lugar a outro", eng: "migration" },
"bando": { type: "substantivo", def: "Grupo de animais", eng: "flock" },
"aves": { type: "substantivo", def: "Animais que voam", eng: "birds" },
"selvagens": { type: "substantivo", def: "Não domesticados", eng: "wild" },
"ordem": { type: "substantivo", def: "Organização, arrumação", eng: "order" },
"vulcões": { type: "substantivo", def: "Montanhas com lava", eng: "volcanoes" },
"vulcão": { type: "substantivo", def: "Montanha com lava", eng: "volcano" },
"ativos": { type: "substantivo", def: "Em funcionamento", eng: "active" },
"café": { type: "substantivo", def: "Bebida estimulante", eng: "coffee" },
"erupções": { type: "substantivo", def: "Explosões vulcânicas", eng: "eruptions" },
"incêndios": { type: "substantivo", def: "Fogos descontrolados", eng: "fires" },
"chaminé": { type: "substantivo", def: "Conduto de fumaça", eng: "chimney" },
"problemas": { type: "substantivo", def: "Dificuldades, questões", eng: "problems" },
"sensação": { type: "substantivo", def: "Impressão, sentimento", eng: "sensation" },
"desânimo": { type: "substantivo", def: "Falta de ânimo", eng: "discouragement" },
"tarefas": { type: "substantivo", def: "Trabalhos, afazeres", eng: "tasks" },
"familiares": { type: "substantivo", def: "Conhecidos, habituais", eng: "familiar" },
"ponto": { type: "substantivo", def: "Momento, instante", eng: "point" },
"adeus": { type: "substantivo", def: "Despedida", eng: "goodbye" },
"resfriado": { type: "substantivo", def: "Doença leve", eng: "cold" },
"ausência": { type: "substantivo", def: "Falta de presença", eng: "absence" },
"censuras": { type: "substantivo", def: "Críticas, repreensões", eng: "reproaches" },
"doçura": { type: "substantivo", def: "Qualidade de doce", eng: "sweetness" },
"culpa": { type: "substantivo", def: "Responsabilidade por erro", eng: "fault" },
"globo": { type: "substantivo", def: "Esfera, bola", eng: "globe" },
"lagartas": { type: "substantivo", def: "Insetos jovens", eng: "caterpillars" },
"borboletas": { type: "substantivo", def: "Insetos com asas coloridas", eng: "butterflies" },
"companhia": { type: "substantivo", def: "Presença de outros", eng: "company" },
"animais": { type: "substantivo", def: "Seres vivos não humanos", eng: "animals" },
"bairro": { type: "substantivo", def: "Área, vizinhança", eng: "neighborhood" },
"asteroides": { type: "substantivo", def: "Pequenos corpos celestes", eng: "asteroids" },
"rei": { type: "substantivo", def: "Monarca, soberano", eng: "king" },
"púrpura": { type: "substantivo", def: "Cor roxa", eng: "purple" },
"arminho": { type: "substantivo", def: "Tipo de pele", eng: "ermine" },
"real": { type: "substantivo", def: "Do rei, da realeza", eng: "royal" },
"trono": { type: "substantivo", def: "Assento do rei", eng: "throne" },
"sujeito": { type: "substantivo", def: "Pessoa, indivíduo", eng: "subject" },
"lugares": { type: "substantivo", def: "Locais, sítios", eng: "places" },
"manto": { type: "substantivo", def: "Capa longa", eng: "cloak" },
"etiqueta": { type: "substantivo", def: "Regras de comportamento", eng: "etiquette" },
"presença": { type: "substantivo", def: "Ato de estar presente", eng: "presence" },
"monarca": { type: "substantivo", def: "Rei, soberano", eng: "monarch" },
"viagem": { type: "substantivo", def: "Deslocamento longo", eng: "trip" },
"bocejos": { type: "substantivo", def: "Ato de bocejar", eng: "yawns" },
"objetos": { type: "substantivo", def: "Coisas, itens", eng: "objects" },
"curiosidade": { type: "substantivo", def: "Desejo de saber", eng: "curiosity" },
"ordem": { type: "substantivo", def: "Comando, mandamento", eng: "order" },
"ordens": { type: "substantivo", def: "Comandos, mandamentos", eng: "orders" },
"autoridade": { type: "substantivo", def: "Poder, domínio", eng: "authority" },
"desobediência": { type: "substantivo", def: "Falta de obediência", eng: "disobedience" },
"exemplo": { type: "substantivo", def: "Modelo, caso", eng: "example" },
"general": { type: "substantivo", def: "Comandante militar", eng: "general" },
"pássaro": { type: "substantivo", def: "Ave", eng: "bird" },
"mar": { type: "substantivo", def: "Grande massa de água", eng: "sea" },
"dobra": { type: "substantivo", def: "Prega, vinco", eng: "fold" },
"gesto": { type: "substantivo", def: "Movimento do corpo", eng: "gesture" },
"governo": { type: "substantivo", def: "Administração, controle", eng: "government" },
"insubordinação": { type: "substantivo", def: "Rebeldia, desobediência", eng: "insubordination" },
"poder": { type: "substantivo", def: "Capacidade, força", eng: "power" },
"centena": { type: "substantivo", def: "Cem unidades", eng: "hundred" },
"duzentas": { type: "substantivo", def: "Número 200", eng: "two hundred" },
"lembrança": { type: "substantivo", def: "Memória, recordação", eng: "memory" },
"coragem": { type: "substantivo", def: "Bravura, valentia", eng: "courage" },
"favor": { type: "substantivo", def: "Pedido cortês", eng: "favor" },
"flor": { type: "substantivo", def: "Parte colorida da planta", eng: "flower" },
"borboleta": { type: "substantivo", def: "Inseto com asas", eng: "butterfly" },
"tragédia": { type: "substantivo", def: "Drama, desastre", eng: "tragedy" },
"razão": { type: "substantivo", def: "Lógica, bom senso", eng: "reason" },
"povo": { type: "substantivo", def: "População, gente", eng: "people" },
"revolução": { type: "substantivo", def: "Revolta, mudança radical", eng: "revolution" },
"direito": { type: "substantivo", def: "Poder legal", eng: "right" },
"obediência": { type: "substantivo", def: "Submissão, acatamento", eng: "obedience" },
"ciência": { type: "substantivo", def: "Conhecimento, saber", eng: "science" },
"condições": { type: "substantivo", def: "Circunstâncias, estados", eng: "conditions" },
"almanaque": { type: "substantivo", def: "Calendário com informações", eng: "almanac" },
"volumoso": { type: "substantivo", def: "De grande volume", eng: "voluminous" },
"ministro": { type: "substantivo", def: "Membro do governo", eng: "minister" },
"justiça": { type: "substantivo", def: "Equidade, direito", eng: "justice" },
"reino": { type: "substantivo", def: "Território do rei", eng: "kingdom" },
"carruagem": { type: "substantivo", def: "Veículo puxado", eng: "carriage" },
"sabedoria": { type: "substantivo", def: "Grande conhecimento", eng: "wisdom" },
"rato": { type: "substantivo", def: "Pequeno roedor", eng: "rat" },
"ocasião": { type: "substantivo", def: "Oportunidade, momento", eng: "occasion" },
"preparativos": { type: "substantivo", def: "Preparações", eng: "preparations" },
"majestade": { type: "substantivo", def: "Tratamento real", eng: "majesty" },
"suspiro": { type: "substantivo", def: "Respiração profunda", eng: "sigh" },
"embaixador": { type: "substantivo", def: "Representante diplomático", eng: "ambassador" },
"pressas": { type: "substantivo", def: "Pressa, urgência", eng: "haste" },
"homem": { type: "substantivo", def: "Pessoa do sexo masculino", eng: "man" },
"vaidoso": { type: "substantivo", def: "Pessoa orgulhosa", eng: "vain person" },
"visita": { type: "substantivo", def: "Ato de visitar", eng: "visit" },
"admirador": { type: "substantivo", def: "Pessoa que admira", eng: "admirer" },
"longe": { type: "substantivo", def: "Grande distância", eng: "far" },
"chegava": { type: "substantivo", def: "Que estava chegando", eng: "arriving" },
"vaidosos": { type: "substantivo", def: "Pessoas orgulhosas", eng: "vain people" },
"admiradores": { type: "substantivo", def: "Pessoas que admiram", eng: "admirers" },
"saudações": { type: "substantivo", def: "Cumprimentos", eng: "greetings" },
"aclamam": { type: "substantivo", def: "Aplaudem, celebram", eng: "acclaim" },
"infelizmente": { type: "substantivo", def: "Por infelicidade", eng: "unfortunately" },
"palmas": { type: "substantivo", def: "Parte da mão", eng: "palms" },
"saudação": { type: "substantivo", def: "Cumprimento", eng: "greeting" },
"exercício": { type: "substantivo", def: "Atividade repetida", eng: "exercise" },
"príncipe": { type: "substantivo", def: "Filho de rei", eng: "prince" },
"monotonia": { type: "substantivo", def: "Falta de variedade", eng: "monotony" },
"jogo": { type: "substantivo", def: "Brincadeira, diversão", eng: "game" },
"ovação": { type: "substantivo", def: "Aplauso entusiástico", eng: "ovation" },
"vestido": { type: "substantivo", def: "Roupa, traje", eng: "dressed" },
"rico": { type: "substantivo", def: "Com muita riqueza", eng: "rich" },
"inteligente": { type: "substantivo", def: "Esperto, sagaz", eng: "intelligent" },
"beberrão": { type: "substantivo", def: "Pessoa que bebe muito", eng: "drunkard" },
"desânimo": { type: "substantivo", def: "Falta de ânimo", eng: "dejection" },
"profundo": { type: "substantivo", def: "Muito fundo", eng: "deep" },
"ébrio": { type: "substantivo", def: "Pessoa bêbada", eng: "drunk" },
"coleção": { type: "substantivo", def: "Conjunto de objetos", eng: "collection" },
"garrafas": { type: "substantivo", def: "Recipientes para líquidos", eng: "bottles" },
"vazias": { type: "substantivo", def: "Sem conteúdo", eng: "empty" },
"cheias": { type: "substantivo", def: "Com conteúdo", eng: "full" },
"ar": { type: "substantivo", def: "Aparência, aspecto", eng: "air" },
"lúgubre": { type: "substantivo", def: "Triste, sombrio", eng: "gloomy" },
"bêbado": { type: "substantivo", def: "Pessoa embriagada", eng: "drunk" },
"discurso": { type: "substantivo", def: "Fala, declaração", eng: "speech" },
"empresário": { type: "substantivo", def: "Homem de negócios", eng: "businessman" },
"cigarro": { type: "substantivo", def: "Produto de tabaco", eng: "cigarette" },
"apagou": { type: "substantivo", def: "Deixou de queimar", eng: "went out" },
"quinze": { type: "substantivo", def: "Número 15", eng: "fifteen" },
"vinte": { type: "substantivo", def: "Número 20", eng: "twenty" },
"vinte-dois": { type: "substantivo", def: "Número 22", eng: "twenty-two" },
"vinte-seis": { type: "substantivo", def: "Número 26", eng: "twenty-six" },
"trinta": { type: "substantivo", def: "Número 30", eng: "thirty" },
"trinta-um": { type: "substantivo", def: "Número 31", eng: "thirty-one" },
"quinhentos": { type: "substantivo", def: "Número 500", eng: "five hundred" },
"seiscentos": { type: "substantivo", def: "Número 600", eng: "six hundred" },
"setecentos": { type: "substantivo", def: "Número 700", eng: "seven hundred" },
"trinta-um": { type: "substantivo", def: "Número 31", eng: "thirty-one" },
"bobagens": { type: "substantivo", def: "Tolices, besteiras", eng: "nonsense" },
"cinco": { type: "substantivo", def: "Número 5", eng: "five" },
"sete": { type: "substantivo", def: "Número 7", eng: "seven" },
"doze": { type: "substantivo", def: "Número 12", eng: "twelve" },
"besouro": { type: "substantivo", def: "Tipo de inseto", eng: "beetle" },
"vertiginoso": { type: "substantivo", def: "Que causa vertigem", eng: "vertiginous" },
"ruído": { type: "substantivo", def: "Som, barulho", eng: "noise" },
"ataque": { type: "substantivo", def: "Investida, assalto", eng: "attack" },
"reumatismo": { type: "substantivo", def: "Doença das articulações", eng: "rheumatism" },
"exercícios": { type: "substantivo", def: "Atividades físicas", eng: "exercises" },
"físicos": { type: "substantivo", def: "Do corpo", eng: "physical" },
"menino": { type: "substantivo", def: "Criança do sexo masculino", eng: "boy" },
"moscas": { type: "substantivo", def: "Insetos voadores", eng: "flies" },
"abelhas": { type: "substantivo", def: "Insetos que fazem mel", eng: "bees" },
"preguiçosos": { type: "substantivo", def: "Pessoas sem energia", eng: "lazy people" },
"sonharem": { type: "substantivo", def: "Terem sonhos", eng: "to dream" },
"acordados": { type: "substantivo", def: "Despertos, não dormindo", eng: "awake" },
"precisão": { type: "substantivo", def: "Exatidão", eng: "precision" },
"lenço": { type: "substantivo", def: "Tecido pequeno", eng: "handkerchief" },
"seda": { type: "substantivo", def: "Tecido fino", eng: "silk" },
"pescoço": { type: "substantivo", def: "Parte do corpo", eng: "neck" },
"banco": { type: "substantivo", def: "Instituição financeira", eng: "bank" },
"gaveta": { type: "substantivo", def: "Compartimento em móvel", eng: "drawer" },
"chave": { type: "substantivo", def: "Objeto para trancar", eng: "key" },
"importância": { type: "substantivo", def: "Relevância, valor", eng: "importance" },
"lâmpada": { type: "substantivo", def: "Objeto de iluminação", eng: "lamp" },
"rua": { type: "substantivo", def: "Via pública", eng: "street" },
"acendedor": { type: "substantivo", def: "Pessoa que acende", eng: "lighter" },
"espaço": { type: "substantivo", def: "Área, lugar", eng: "space" },
"explicação": { type: "substantivo", def: "Esclarecimento", eng: "explanation" },
"uso": { type: "substantivo", def: "Utilização, emprego", eng: "use" },
"casas": { type: "substantivo", def: "Habitações", eng: "houses" },
"absurdo": { type: "substantivo", def: "Sem lógica", eng: "absurd" },
"significado": { type: "substantivo", def: "Sentido, importância", eng: "meaning" },
"ocupação": { type: "substantivo", def: "Trabalho, atividade", eng: "occupation" },
"lampião": { type: "substantivo", def: "Lâmpada grande", eng: "street lamp" },
"candeeiro": { type: "substantivo", def: "Lâmpada, luz", eng: "lamp" },
"lume": { type: "substantivo", def: "Fogo, luz", eng: "light" },
"profissão": { type: "substantivo", def: "Ocupação, trabalho", eng: "profession" },
"tempos": { type: "substantivo", def: "Épocas, períodos", eng: "times" },
"velhos": { type: "substantivo", def: "Antigos", eng: "old" },
"resto": { type: "substantivo", def: "Parte restante", eng: "rest" },
"relaxar": { type: "substantivo", def: "Descansar", eng: "to relax" },
"dormir": { type: "substantivo", def: "Repousar", eng: "to sleep" },
"tragédia": { type: "substantivo", def: "Drama, desastre", eng: "tragedy" },
"ano": { type: "substantivo", def: "Período de 12 meses", eng: "year" },
"volta": { type: "substantivo", def: "Giro completo", eng: "turn" },
"completa": { type: "substantivo", def: "Total, inteira", eng: "complete" },
"segundo": { type: "substantivo", def: "Unidade de tempo", eng: "second" },
"segundos": { type: "substantivo", def: "Unidades de tempo", eng: "seconds" },
"repouso": { type: "substantivo", def: "Descanso, pausa", eng: "rest" },
"mês": { type: "substantivo", def: "Período de 30 dias", eng: "month" },
"passou": { type: "substantivo", def: "Decorreu, transcorreu", eng: "passed" },
"afeição": { type: "substantivo", def: "Carinho, afeto", eng: "affection" },
"fiel": { type: "substantivo", def: "Leal, dedicado", eng: "faithful" },
"passos": { type: "substantivo", def: "Movimentos ao andar", eng: "steps" },
"caminho": { type: "substantivo", def: "Via, trajeto", eng: "way" },
"luz": { type: "substantivo", def: "Claridade, iluminação", eng: "light" },
"crepúsculo": { type: "substantivo", def: "Período entre dia e noite", eng: "twilight" },
"azarado": { type: "substantivo", def: "Sem sorte", eng: "unlucky" },
"desprezado": { type: "substantivo", def: "Rejeitado, menosprezado", eng: "despised" },
"ridículo": { type: "substantivo", def: "Absurdo, risível", eng: "ridiculous" },
"pesar": { type: "substantivo", def: "Tristeza, lamento", eng: "regret" },
"arrependido": { type: "substantivo", def: "Com arrependimento", eng: "regretful" },
"abençoado": { type: "substantivo", def: "Com bênção", eng: "blessed" },
"sexto": { type: "substantivo", def: "Número 6 em ordem", eng: "sixth" },
"sétimo": { type: "substantivo", def: "Número 7 em ordem", eng: "seventh" },
"ancião": { type: "substantivo", def: "Pessoa idosa", eng: "old man" },
"explorador": { type: "substantivo", def: "Pessoa que explora", eng: "explorer" },
"mesa": { type: "substantivo", def: "Móvel com tampo", eng: "table" },
"ofegante": { type: "substantivo", def: "Sem fôlego", eng: "breathless" },
"geógrafo": { type: "substantivo", def: "Estudioso da geografia", eng: "geographer" },
"estudioso": { type: "substantivo", def: "Pessoa que estuda", eng: "scholar" },
"localização": { type: "substantivo", def: "Posição, lugar", eng: "location" },
"mares": { type: "substantivo", def: "Grandes massas de água", eng: "seas" },
"rios": { type: "substantivo", def: "Cursos de água", eng: "rivers" },
"cidades": { type: "substantivo", def: "Áreas urbanas", eng: "cities" },
"montanhas": { type: "substantivo", def: "Elevações de terra", eng: "mountains" },
"desertos": { type: "substantivo", def: "Áreas áridas", eng: "deserts" },
"imponente": { type: "substantivo", def: "Impressionante, majestoso", eng: "imposing" },
"oceano": { type: "substantivo", def: "Grande massa de água salgada", eng: "ocean" },
"exploradores": { type: "substantivo", def: "Pessoas que exploram", eng: "explorers" },
"estudo": { type: "substantivo", def: "Local de trabalho intelectual", eng: "study" },
"viagens": { type: "substantivo", def: "Deslocamentos longos", eng: "travels" },
"lembranças": { type: "substantivo", def: "Memórias, recordações", eng: "memories" },
"investigação": { type: "substantivo", def: "Pesquisa, inquérito", eng: "investigation" },
"caráter": { type: "substantivo", def: "Natureza, índole", eng: "character" },
"moral": { type: "substantivo", def: "Relativo aos costumes", eng: "moral" },
"livros": { type: "substantivo", def: "Obras escritas", eng: "books" },
"embriagados": { type: "substantivo", def: "Pessoas bêbadas", eng: "intoxicated" },
"dobro": { type: "substantivo", def: "Duas vezes mais", eng: "double" },
"anotaria": { type: "substantivo", def: "Escreveria", eng: "would note" },
"inquérito": { type: "substantivo", def: "Investigação", eng: "inquiry" },
"descoberta": { type: "substantivo", def: "Achado, revelação", eng: "discovery" },
"montanha": { type: "substantivo", def: "Elevação grande de terra", eng: "mountain" },
"provas": { type: "substantivo", def: "Evidências", eng: "proofs" },
"pedras": { type: "substantivo", def: "Rochas, minerais", eng: "stones" },
"excitação": { type: "substantivo", def: "Agitação, entusiasmo", eng: "excitement" },
"registo": { type: "substantivo", def: "Anotação, registro", eng: "record" },
"considerações": { type: "substantivo", def: "Reflexões, pensamentos", eng: "considerations" },
"tinta": { type: "substantivo", def: "Líquido para escrever", eng: "ink" },
"expectativa": { type: "substantivo", def: "Esperança, aguardo", eng: "expectation" },
"extinto": { type: "substantivo", def: "Que se extinguiu", eng: "extinct" },
"mordaça": { type: "substantivo", def: "Objeto para tapar boca", eng: "muzzle" },
"registramos": { type: "substantivo", def: "Anotamos", eng: "record" },
"efêmera": { type: "substantivo", def: "Passageira, temporária", eng: "ephemeral" },
"geografias": { type: "substantivo", def: "Plural de geografia", eng: "geographies" },
"questões": { type: "substantivo", def: "Perguntas, assuntos", eng: "questions" },
"desatualizados": { type: "substantivo", def: "Não atuais", eng: "outdated" },
"posição": { type: "substantivo", def: "Lugar, localização", eng: "position" },
"águas": { type: "substantivo", def: "Líquido vital", eng: "waters" },
"permanentes": { type: "substantivo", def: "Duradouros", eng: "permanent" },
"tratam-se": { type: "substantivo", def: "Referem-se", eng: "concern" },
"primeiro": { type: "substantivo", def: "Inicial, primeiro momento", eng: "first" },
"bilhões": { type: "substantivo", def: "Milhares de milhões", eng: "billions" },
"reis": { type: "substantivo", def: "Monarcas, soberanos", eng: "kings" },
"africanos": { type: "substantivo", def: "Da África", eng: "African" },
"geógrafos": { type: "substantivo", def: "Estudiosos da geografia", eng: "geographers" },
"empresários": { type: "substantivo", def: "Homens de negócios", eng: "businessmen" },
"beberrões": { type: "substantivo", def: "Pessoas que bebem muito", eng: "drunkards" },
"homens": { type: "substantivo", def: "Pessoas do sexo masculino", eng: "men" },
"invenção": { type: "substantivo", def: "Criação, descoberta", eng: "invention" },
"eletricidade": { type: "substantivo", def: "Forma de energia", eng: "electricity" },
"exército": { type: "substantivo", def: "Força militar", eng: "army" },
"acendedores": { type: "substantivo", def: "Pessoas que acendem", eng: "lighters" },
"lampiões": { type: "substantivo", def: "Lâmpadas de rua", eng: "street lamps" },
"continentes": { type: "substantivo", def: "Grandes massas de terra", eng: "continents" },
"distância": { type: "substantivo", def: "Espaço entre dois pontos", eng: "distance" },
"espetáculo": { type: "substantivo", def: "Espectáculo, show", eng: "spectacle" },
"magnífico": { type: "substantivo", def: "Esplêndido, grandioso", eng: "magnificent" },
"movimentos": { type: "substantivo", def: "Atos de mover", eng: "movements" },
"balé": { type: "substantivo", def: "Dança clássica", eng: "ballet" },
"ópera": { type: "substantivo", def: "Teatro musical", eng: "opera" },
"vez": { type: "substantivo", def: "Ocasião, turno", eng: "turn" },
"zelândia": { type: "substantivo", def: "País da Oceania", eng: "Zealand" },
"austrália": { type: "substantivo", def: "País da Oceania", eng: "Australia" },
"lâmpadas": { type: "substantivo", def: "Objetos de iluminação", eng: "lamps" },
"recolheriam": { type: "substantivo", def: "Voltariam", eng: "would retire" },
"sibéria": { type: "substantivo", def: "Região da Rússia", eng: "Siberia" },
"dança": { type: "substantivo", def: "Movimento rítmico", eng: "dance" },
"retirariam": { type: "substantivo", def: "Sairiam", eng: "would withdraw" },
"bastidores": { type: "substantivo", def: "Parte oculta do palco", eng: "backstage" },
"rússia": { type: "substantivo", def: "País europeu", eng: "Russia" },
"índias": { type: "substantivo", def: "Região asiática", eng: "Indies" },
"áfrica": { type: "substantivo", def: "Continente", eng: "Africa" },
"europa": { type: "substantivo", def: "Continente", eng: "Europe" },
"sequência": { type: "substantivo", def: "Ordem, sucessão", eng: "sequence" },
"américa": { type: "substantivo", def: "Continente", eng: "America" },
"norte": { type: "substantivo", def: "Ponto cardeal", eng: "north" },
"entrada": { type: "substantivo", def: "Ato de entrar", eng: "entrance" },
"palco": { type: "substantivo", def: "Área de apresentação", eng: "stage" },
"comando": { type: "substantivo", def: "Controle, liderança", eng: "command" },
"única": { type: "substantivo", def: "Só uma, singular", eng: "single" },
"polo": { type: "substantivo", def: "Extremidade da Terra", eng: "pole" },
"colega": { type: "substantivo", def: "Companheiro de trabalho", eng: "colleague" },
"responsável": { type: "substantivo", def: "Encarregado", eng: "responsible" },
"labuta": { type: "substantivo", def: "Trabalho árduo", eng: "toil" },
"ocupariam": { type: "substantivo", def: "Trabalhariam", eng: "would occupy" },
"espirituoso": { type: "substantivo", def: "Engraçado, esperto", eng: "witty" },
"mentimos": { type: "substantivo", def: "Dizemos mentira", eng: "lie" },
"honesto": { type: "substantivo", def: "Sincero, verdadeiro", eng: "honest" },
"risco": { type: "substantivo", def: "Perigo, ameaça", eng: "risk" },
"falsa": { type: "substantivo", def: "Não verdadeira", eng: "false" },
"ideia": { type: "substantivo", def: "Pensamento, conceito", eng: "idea" },
"habitantes": { type: "substantivo", def: "Moradores", eng: "inhabitants" },
"superfície": { type: "substantivo", def: "Parte externa", eng: "surface" },
"juntos": { type: "substantivo", def: "Unidos, próximos", eng: "together" },
"assembleia": { type: "substantivo", def: "Reunião, congresso", eng: "assembly" },
"pública": { type: "substantivo", def: "Do público", eng: "public" },
"facilmente": { type: "substantivo", def: "Com facilidade", eng: "easily" },
"praça": { type: "substantivo", def: "Área pública", eng: "square" },
"milhas": { type: "substantivo", def: "Unidade de distância", eng: "miles" },
"comprimento": { type: "substantivo", def: "Extensão longitudinal", eng: "length" },
"largura": { type: "substantivo", def: "Extensão lateral", eng: "width" },
"humanidade": { type: "substantivo", def: "Conjunto de humanos", eng: "humanity" },
"amontoada": { type: "substantivo", def: "Empilhada, junta", eng: "piled up" },
"ilhota": { type: "substantivo", def: "Ilha pequena", eng: "islet" },
"pacífico": { type: "substantivo", def: "Oceano", eng: "Pacific" },
"acreditarão": { type: "substantivo", def: "Terão fé", eng: "will believe" },
"imaginam": { type: "substantivo", def: "Creem, pensam", eng: "imagine" },
"preenchem": { type: "substantivo", def: "Ocupam, enchem", eng: "fill" },
"cálculos": { type: "substantivo", def: "Contas, operações", eng: "calculations" },
"adoram": { type: "substantivo", def: "Amam muito", eng: "adore" },
"agradá-los": { type: "substantivo", def: "Contentá-los", eng: "to please them" },
"extra": { type: "substantivo", def: "Adicional, a mais", eng: "extra" },
"desnecessária": { type: "substantivo", def: "Não necessária", eng: "unnecessary" },
"confiança": { type: "substantivo", def: "Fé, crença", eng: "confidence" },
"serpente": { type: "substantivo", def: "Cobra, réptil", eng: "serpent" },
"retorcida": { type: "substantivo", def: "Torcida, enrolada", eng: "twisted" },
"luar": { type: "substantivo", def: "Luz da lua", eng: "moonlight" },
"cortesia": { type: "substantivo", def: "Educação, gentileza", eng: "courtesy" },
"cobra": { type: "substantivo", def: "Serpente, réptil", eng: "snake" },
"pedra": { type: "substantivo", def: "Rocha, mineral", eng: "stone" },
"ergueu": { type: "substantivo", def: "Levantou", eng: "raised" },
"céu": { type: "substantivo", def: "Espaço acima da Terra", eng: "sky" },
"acendem": { type: "substantivo", def: "Iluminam", eng: "light up" },
"encanto": { type: "substantivo", def: "Fascínio, magia", eng: "charm" },
"solitário": { type: "substantivo", def: "Sozinho, isolado", eng: "lonely" },
"finalmente": { type: "substantivo", def: "Por fim, enfim", eng: "finally" },
"retomou": { type: "substantivo", def: "Continuou", eng: "resumed" },
"conversa": { type: "substantivo", def: "Diálogo, bate-papo", eng: "conversation" },
"conversação": { type: "substantivo", def: "Diálogo, conversa", eng: "conversation" },
"espesso": { type: "substantivo", def: "Grosso, denso", eng: "thick" },
"dedo": { type: "substantivo", def: "Parte da mão", eng: "finger" },
"poderosa": { type: "substantivo", def: "Com grande poder", eng: "powerful" },
"pés": { type: "substantivo", def: "Partes do corpo para andar", eng: "feet" },
"navio": { type: "substantivo", def: "Embarcação grande", eng: "ship" },
"enroscou-se": { type: "substantivo", def: "Enrolou-se", eng: "coiled" },
"tornozelo": { type: "substantivo", def: "Articulação do pé", eng: "ankle" },
"bracelete": { type: "substantivo", def: "Pulseira", eng: "bracelet" },
"ouro": { type: "substantivo", def: "Metal precioso", eng: "gold" },
"toco": { type: "substantivo", def: "Toco, encosto", eng: "touch" },
"mando": { type: "substantivo", def: "Envio", eng: "send" },
"inocente": { type: "substantivo", def: "Sem culpa, puro", eng: "innocent" },
"verdadeiro": { type: "substantivo", def: "Real, autêntico", eng: "true" },
"piedade": { type: "substantivo", def: "Compaixão, pena", eng: "pity" },
"fraco": { type: "substantivo", def: "Sem força", eng: "weak" },
"dura": { type: "substantivo", def: "Rígida, firme", eng: "hard" },
"saudades": { type: "substantivo", def: "Nostalgia, falta", eng: "longing" },
"próprio": { type: "substantivo", def: "Seu, particular", eng: "own" },
"entendo": { type: "substantivo", def: "Compreendo", eng: "understand" },
"enigmas": { type: "substantivo", def: "Mistérios, charadas", eng: "riddles" },
"resolvo": { type: "substantivo", def: "Soluciono", eng: "solve" },
"atravessou": { type: "substantivo", def: "Passou através", eng: "crossed" },
"encontrou-se": { type: "substantivo", def: "Deparou-se", eng: "encountered" },
"florzinha": { type: "substantivo", def: "Flor pequena", eng: "little flower" },
"educadamente": { type: "substantivo", def: "Com educação", eng: "politely" },
"caravana": { type: "substantivo", def: "Grupo de viajantes", eng: "caravan" },
"passara": { type: "substantivo", def: "Tinha passado", eng: "had passed" },
"encontrá-los": { type: "substantivo", def: "Achá-los", eng: "to find them" },
"sopra": { type: "substantivo", def: "Assopra, ventila", eng: "blows" },
"raízes": { type: "substantivo", def: "Partes da planta no solo", eng: "roots" },
"difícil": { type: "substantivo", def: "Complicada, árdua", eng: "difficult" },
"escalou": { type: "substantivo", def: "Subiu", eng: "climbed" },
"alta": { type: "substantivo", def: "De grande altura", eng: "tall" },
"únicas": { type: "substantivo", def: "As únicas", eng: "only" },
"conhecera": { type: "substantivo", def: "Tinha conhecido", eng: "had known" },
"subiam": { type: "substantivo", def: "Subiam", eng: "rose" },
"joelhos": { type: "substantivo", def: "Articulações das pernas", eng: "knees" },
"usava": { type: "substantivo", def: "Utilizava", eng: "used" },
"banquinho": { type: "substantivo", def: "Assento baixo", eng: "stool" },
"picos": { type: "substantivo", def: "Pontas, cumes", eng: "peaks" },
"rochosos": { type: "substantivo", def: "De rocha", eng: "rocky" },
"afiados": { type: "substantivo", def: "Pontiagudos, aguçados", eng: "sharp" },
"agulhas": { type: "substantivo", def: "Objetos pontiagudos", eng: "needles" },
"eco": { type: "substantivo", def: "Som refletido", eng: "echo" },
"sejam": { type: "substantivo", def: "Verbo SER no subjuntivo", eng: "be" },
"seco": { type: "substantivo", def: "Sem água", eng: "dry" },
"completamente": { type: "substantivo", def: "Totalmente", eng: "completely" },
"pontiagudo": { type: "substantivo", def: "Com ponta", eng: "pointy" },
"severo": { type: "substantivo", def: "Rígido, austero", eng: "severe" },
"proibitivo": { type: "substantivo", def: "Que proíbe", eng: "forbidding" },
"imaginação": { type: "substantivo", def: "Capacidade de imaginar", eng: "imagination" },
"repetem": { type: "substantivo", def: "Dizem de novo", eng: "repeat" },
"aconteceu": { type: "substantivo", def: "Ocorreu, sucedeu", eng: "happened" },
"caminhar": { type: "substantivo", def: "Andar a pé", eng: "to walk" },
"neve": { type: "substantivo", def: "Água congelada", eng: "snow" },
"estrada": { type: "substantivo", def: "Via, caminho", eng: "road" },
"caminhos": { type: "substantivo", def: "Vias, rotas", eng: "paths" },
"levam": { type: "substantivo", def: "Conduzem", eng: "lead" },
"jardim": { type: "substantivo", def: "Área com plantas", eng: "garden" },
"rosas": { type: "substantivo", def: "Flores perfumadas", eng: "roses" },
"pareciam": { type: "substantivo", def: "Pareciam ser", eng: "seemed" },
"exigiu": { type: "substantivo", def: "Demandou", eng: "demanded" },
"estupefato": { type: "substantivo", def: "Muito surpreso", eng: "astonished" },
"tomado": { type: "substantivo", def: "Apoderado", eng: "taken" },
"tristeza": { type: "substantivo", def: "Estado de triste", eng: "sadness" },
"havia": { type: "substantivo", def: "Existia", eng: "there was" },
"espécie": { type: "substantivo", def: "Tipo, categoria", eng: "species" },
"universo": { type: "substantivo", def: "Cosmos, tudo", eng: "universe" },
"iguais": { type: "substantivo", def: "Semelhantes, idênticas", eng: "equal" },
"aborrecida": { type: "substantivo", def: "Chateada, irritada", eng: "upset" },
"visse": { type: "substantivo", def: "Verbo VER no subjuntivo", eng: "saw" },
"tossiria": { type: "substantivo", def: "Verbo TOSSIR no futuro pretérito", eng: "would cough" },
"terrivelmente": { type: "substantivo", def: "De forma terrível", eng: "terribly" },
"fingiria": { type: "substantivo", def: "Verbo FINGIR no futuro pretérito", eng: "would pretend" },
"morrendo": { type: "substantivo", def: "A morrer", eng: "dying" },
"evitar": { type: "substantivo", def: "Impedir, escapar", eng: "to avoid" },
"ridicularizada": { type: "substantivo", def: "Zombada", eng: "ridiculed" },
"obrigado": { type: "substantivo", def: "Forçado", eng: "obliged" },
"fingir": { type: "substantivo", def: "Simular, aparentar", eng: "to pretend" },
"cuidar": { type: "substantivo", def: "Zelar, tratar", eng: "to care" },
"humilhando": { type: "substantivo", def: "Rebaixando", eng: "humiliating" },
"permitiria": { type: "substantivo", def: "Deixaria", eng: "would allow" },
"morrer": { type: "substantivo", def: "Falecer", eng: "to die" },
"reflexões": { type: "substantivo", def: "Pensamentos profundos", eng: "reflections" },
"rico": { type: "substantivo", def: "Com muita riqueza", eng: "rich" },
"comum": { type: "substantivo", def: "Ordinária, normal", eng: "common" },
"deitou-se": { type: "substantivo", def: "Recostou-se", eng: "lay down" },
"chorou": { type: "substantivo", def: "Derramou lágrimas", eng: "cried" },
"apareceu": { type: "substantivo", def: "Surgiu, manifestou-se", eng: "appeared" },
"raposa": { type: "substantivo", def: "Animal selvagem", eng: "fox" },
"respondeu": { type: "substantivo", def: "Deu resposta", eng: "answered" },
"virou": { type: "substantivo", def: "Voltou-se", eng: "turned" },
"macieira": { type: "substantivo", def: "Árvore de maçãs", eng: "apple tree" },
"bonita": { type: "substantivo", def: "Bela, formosa", eng: "beautiful" },
"brincar": { type: "substantivo", def: "Jogar, divertir-se", eng: "to play" },
"propôs": { type: "substantivo", def: "Sugeriu", eng: "proposed" },
"cativada": { type: "substantivo", def: "Conquistada, dominada", eng: "tamed" },
"desculpe-me": { type: "substantivo", def: "Peço desculpas", eng: "excuse me" },
"cativar": { type: "substantivo", def: "Conquistar, domesticar", eng: "to tame" },
"procurando": { type: "substantivo", def: "Buscando", eng: "looking for" },
"caçam": { type: "substantivo", def: "Perseguem animais", eng: "hunt" },
"perturbador": { type: "substantivo", def: "Que perturba", eng: "disturbing" },
"criam": { type: "substantivo", def: "Fazem crescer", eng: "raise" },
"galinhas": { type: "substantivo", def: "Aves domésticas", eng: "chickens" },
"únicos": { type: "substantivo", def: "Os únicos", eng: "only" },
"interesses": { type: "substantivo", def: "Assuntos de interesse", eng: "interests" },
"esquecida": { type: "substantivo", def: "Não lembrada", eng: "forgotten" },
"estabelecer": { type: "substantivo", def: "Criar, fundar", eng: "to establish" },
"laços": { type: "substantivo", def: "Ligações, vínculos", eng: "ties" },
"necessidade": { type: "substantivo", def: "Precisão, carência", eng: "need" },
"parte": { type: "substantivo", def: "Porção, lado", eng: "part" },
"garotos": { type: "substantivo", def: "Meninos, rapazes", eng: "boys" },
"começando": { type: "substantivo", def: "Iniciando", eng: "beginning" },
"possível": { type: "substantivo", def: "Que pode ser", eng: "possible" },
"tipos": { type: "substantivo", def: "Categorias, espécies", eng: "types" },
"caçadores": { type: "substantivo", def: "Pessoas que caçam", eng: "hunters" },
"perplexa": { type: "substantivo", def: "Confusa, admirada", eng: "perplexed" },
"curiosa": { type: "substantivo", def: "Com curiosidade", eng: "curious" },
"perfeito": { type: "substantivo", def: "Sem defeitos", eng: "perfect" },
"suspirou": { type: "substantivo", def: "Soltou um suspiro", eng: "sighed" },
"voltou": { type: "substantivo", def: "Retornou", eng: "returned" },
"monótona": { type: "substantivo", def: "Sem variação", eng: "monotonous" },
"consequência": { type: "substantivo", def: "Resultado, efeito", eng: "consequence" },
"entediada": { type: "substantivo", def: "Com tédio", eng: "bored" },
"brilhar": { type: "substantivo", def: "Emitir luz", eng: "to shine" },
"conhecerei": { type: "substantivo", def: "Saberei", eng: "will know" },
"diferentes": { type: "substantivo", def: "Distintos, diversos", eng: "different" },
"outros": { type: "substantivo", def: "Diferentes", eng: "others" },
"escondem": { type: "substantivo", def: "Ocultam", eng: "hide" },
"terra": { type: "substantivo", def: "Chão, solo", eng: "ground" },
"chamar": { type: "substantivo", def: "Invocar, convocar", eng: "to call" },
"música": { type: "substantivo", def: "Arte dos sons", eng: "music" },
"toca": { type: "substantivo", def: "Abrigo de animal", eng: "burrow" },
"olha": { type: "substantivo", def: "Veja, observe", eng: "look" },
"campos": { type: "substantivo", def: "Áreas rurais", eng: "fields" },
"trigo": { type: "substantivo", def: "Cereal", eng: "wheat" },
"como": { type: "substantivo", def: "Alimento", eng: "eat" },
"pão": { type: "substantivo", def: "Alimento de farinha", eng: "bread" },
"nenhuma": { type: "substantivo", def: "Nada de", eng: "no" },
"maravilhoso": { type: "substantivo", def: "Espantoso, magnífico", eng: "wonderful" },
"tiveres": { type: "substantivo", def: "Verbo TER no futuro subjuntivo", eng: "have" },
"cativado": { type: "substantivo", def: "Conquistado, domesticado", eng: "tamed" },
"grão": { type: "substantivo", def: "Semente pequena", eng: "grain" },
"trará": { type: "substantivo", def: "Levará", eng: "will bring" },
"lembrança": { type: "substantivo", def: "Memória, recordação", eng: "memory" },
"amarei": { type: "substantivo", def: "Amarei", eng: "will love" },
"barulho": { type: "substantivo", def: "Som, ruído", eng: "noise" },
"cativa-me": { type: "substantivo", def: "Conquista-me", eng: "tame me" },
"gostaria": { type: "substantivo", def: "Desejaria", eng: "would like" },
"descobrir": { type: "substantivo", def: "Encontrar, achar", eng: "to discover" },
"conhece": { type: "substantivo", def: "Sabe", eng: "knows" },
"bem": { type: "substantivo", def: "De modo bom", eng: "well" },
"cativou": { type: "substantivo", def: "Conquistou", eng: "tamed" },
"compram": { type: "substantivo", def: "Adquirem", eng: "buy" },
"prontinho": { type: "substantivo", def: "Já pronto", eng: "ready-made" },
"lojas": { type: "substantivo", def: "Estabelecimentos comerciais", eng: "stores" },
"loja": { type: "substantivo", def: "Estabelecimento comercial", eng: "store" },
"amizade": { type: "substantivo", def: "Relação de amigos", eng: "friendship" },
"queres": { type: "substantivo", def: "Verbo QUERER na 2ª pessoa", eng: "want" },
"paciente": { type: "substantivo", def: "Que tem paciência", eng: "patient" },
"sentar-se": { type: "substantivo", def: "Colocar-se sentado", eng: "to sit" },
"olharei": { type: "substantivo", def: "Observarei", eng: "will look" },
"canto": { type: "substantivo", def: "Extremidade, lado", eng: "corner" },
"olho": { type: "substantivo", def: "Órgão da visão", eng: "eye" },
"linguagem": { type: "substantivo", def: "Sistema de comunicação", eng: "language" },
"fonte": { type: "substantivo", def: "Origem, nascente", eng: "source" },
"mal-entendidos": { type: "substantivo", def: "Incompreensões", eng: "misunderstandings" },
"perto": { type: "substantivo", def: "Próximo", eng: "close" },
"teria": { type: "substantivo", def: "Verbo TER no condicional", eng: "would have" },
"voltares": { type: "substantivo", def: "Verbo VOLTAR na 2ª pessoa", eng: "return" },
"vens": { type: "substantivo", def: "Verbo VIR na 2ª pessoa", eng: "come" },
"quatro": { type: "substantivo", def: "Número 4", eng: "four" },
"contente": { type: "substantivo", def: "Alegre, satisfeita", eng: "happy" },
"sentindo": { type: "substantivo", def: "Experimentando", eng: "feeling" },
"aproxima": { type: "substantivo", def: "Chega perto", eng: "approaches" },
"deverei": { type: "substantivo", def: "Terei de", eng: "should" },
"saltarei": { type: "substantivo", def: "Pularei", eng: "will jump" },
"mostrar-lhe": { type: "substantivo", def: "Demonstrar-lhe", eng: "to show you" },
"venhas": { type: "substantivo", def: "Verbo VIR no subjuntivo", eng: "come" },
"saberei": { type: "substantivo", def: "Terei conhecimento", eng: "will know" },
"deixar": { type: "substantivo", def: "Permitir, abandonar", eng: "to leave" },
"pronto": { type: "substantivo", def: "Preparado", eng: "ready" },
"recebê-lo": { type: "substantivo", def: "Acolhê-lo", eng: "to receive you" },
"preciso": { type: "substantivo", def: "Necessário", eng: "necessary" },
"observar": { type: "substantivo", def: "Notar, ver", eng: "to observe" },
"ritos": { type: "substantivo", def: "Cerimônias, rituais", eng: "rites" },
"adequados": { type: "substantivo", def: "Apropriados", eng: "adequate" },
"rito": { type: "substantivo", def: "Cerimônia, ritual", eng: "rite" },
"aquilo": { type: "substantivo", def: "Aquela coisa", eng: "that" },
"diferente": { type: "substantivo", def: "Distinto, diverso", eng: "different" },
"quinta-feira": { type: "substantivo", def: "Dia da semana", eng: "Thursday" },
"dançar": { type: "substantivo", def: "Mover-se ao ritmo", eng: "to dance" },
"moças": { type: "substantivo", def: "Jovens mulheres", eng: "girls" },
"aldeia": { type: "substantivo", def: "Povoado pequeno", eng: "village" },
"passeio": { type: "substantivo", def: "Caminhada", eng: "walk" },
"vinhas": { type: "substantivo", def: "Plantações de uvas", eng: "vineyards" },
"dançassem": { type: "substantivo", def: "Verbo DANÇAR no subjuntivo", eng: "danced" },
"idênticos": { type: "substantivo", def: "Iguais, semelhantes", eng: "identical" },
"folga": { type: "substantivo", def: "Descanso, intervalo", eng: "break" },
"sofresse": { type: "substantivo", def: "Verbo SOFRER no subjuntivo", eng: "suffered" },
"quis": { type: "substantivo", def: "Verbo QUERER no pretérito perfeito", eng: "wanted" },
"chorarei": { type: "substantivo", def: "Derramarei lágrimas", eng: "will cry" },
"própria": { type: "substantivo", def: "Sua, particular", eng: "own" },
"sofrer": { type: "substantivo", def: "Padecer, sentir dor", eng: "to suffer" },
"retorquiu": { type: "substantivo", def: "Respondeu", eng: "retorted" },
"claro": { type: "substantivo", def: "Evidente, óbvio", eng: "of course" },
"fiz": { type: "substantivo", def: "Verbo FAZER no pretérito perfeito", eng: "did" },
"causa": { type: "substantivo", def: "Razão, motivo", eng: "cause" },
"caso": { type: "substantivo", def: "Situação, exemplo", eng: "case" },
"único": { type: "substantivo", def: "Só um, singular", eng: "unique" },
"surpresa": { type: "substantivo", def: "Algo inesperado", eng: "surprise" },
"significam": { type: "substantivo", def: "Têm significado", eng: "mean" },
"cativaram": { type: "substantivo", def: "Conquistaram", eng: "tamed" },
"envergonhadas": { type: "substantivo", def: "Com vergonha", eng: "ashamed" },
"bonitas": { type: "substantivo", def: "Belas, formosas", eng: "beautiful" },
"vazias": { type: "substantivo", def: "Sem conteúdo", eng: "empty" },
"transeunte": { type: "substantivo", def: "Pessoa que passa", eng: "passerby" },
"qualquer": { type: "substantivo", def: "Algum, seja qual for", eng: "any" },
"parece": { type: "substantivo", def: "Tem aparência", eng: "seems" },
"sozinha": { type: "substantivo", def: "Sem companhia", eng: "alone" },
"importante": { type: "substantivo", def: "Relevante, significativa", eng: "important" },
"rego": { type: "substantivo", def: "Irrigo", eng: "water" },
"pus": { type: "substantivo", def: "Coloquei", eng: "put" },
"protegido": { type: "substantivo", def: "Defendido", eng: "protected" },
"trás": { type: "substantivo", def: "Parte posterior", eng: "behind" },
"matei": { type: "substantivo", def: "Eliminei", eng: "killed" },
"preservei": { type: "substantivo", def: "Conservei", eng: "preserved" },
"tornarem": { type: "substantivo", def: "Transformarem-se", eng: "become" },
"escutado": { type: "substantivo", def: "Ouvido", eng: "listened" },
"resmunga": { type: "substantivo", def: "Reclama baixo", eng: "grumbles" },
"vangloria": { type: "substantivo", def: "Orgulha-se", eng: "boasts" },
"despedir-se": { type: "substantivo", def: "Dar adeus", eng: "to say goodbye" },
"eis": { type: "substantivo", def: "Aqui está", eng: "behold" },
"clareza": { type: "substantivo", def: "Qualidade de claro", eng: "clarity" },
"essencial": { type: "substantivo", def: "Fundamental, básico", eng: "essential" },
"repetiu": { type: "substantivo", def: "Disse de novo", eng: "repeated" },
"esquecer": { type: "substantivo", def: "Não lembrar", eng: "to forget" },
"gastaste": { type: "substantivo", def: "Usaste, empregaste", eng: "spent" },
"perdi": { type: "substantivo", def: "Desperdicei", eng: "lost/spent" },
"lembrar": { type: "substantivo", def: "Recordar", eng: "to remember" },
"esqueceram": { type: "substantivo", def: "Não lembraram", eng: "forgot" },
"verdade": { type: "substantivo", def: "Realidade, fato", eng: "truth" },
"eternamente": { type: "substantivo", def: "Para sempre", eng: "eternally" },
"torna": { type: "substantivo", def: "Transforma", eng: "becomes" },
"guarda-chaves": { type: "substantivo", def: "Ferroviário", eng: "railway switchman" },
"ferroviário": { type: "substantivo", def: "Trabalhador de ferrovia", eng: "railway worker" },
"despacho": { type: "substantivo", def: "Envio", eng: "dispatch" },
"viajantes": { type: "substantivo", def: "Pessoas que viajam", eng: "travelers" },
"pacotes": { type: "substantivo", def: "Embalagens", eng: "packages" },
"direciono": { type: "substantivo", def: "Guio, conduzo", eng: "direct" },
"trens": { type: "substantivo", def: "Comboios", eng: "trains" },
"carregam": { type: "substantivo", def: "Transportam", eng: "carry" },
"ora": { type: "substantivo", def: "Agora, às vezes", eng: "now" },
"direita": { type: "substantivo", def: "Lado direito", eng: "right" },
"esquerda": { type: "substantivo", def: "Lado esquerdo", eng: "left" },
"expresso": { type: "substantivo", def: "Trem rápido", eng: "express" },
"brilhantemente": { type: "substantivo", def: "Com brilho", eng: "brilliantly" },
"iluminado": { type: "substantivo", def: "Com luz", eng: "illuminated" },
"balançou": { type: "substantivo", def: "Abanou", eng: "shook" },
"cabine": { type: "substantivo", def: "Compartimento pequeno", eng: "cabin" },
"rugindo": { type: "substantivo", def: "Fazendo ruído forte", eng: "roaring" },
"trovão": { type: "substantivo", def: "Som de tempestade", eng: "thunder" },
"comentou": { type: "substantivo", def: "Observou", eng: "commented" },
"pressa": { type: "substantivo", def: "Rapidez, urgência", eng: "hurry" },
"procuram": { type: "substantivo", def: "Buscam", eng: "seek" },
"maquinista": { type: "substantivo", def: "Condutor de trem", eng: "engineer" },
"trovejou": { type: "substantivo", def: "Passou com grande ruído", eng: "thundered" },
"passando": { type: "substantivo", def: "Indo além", eng: "passing" },
"oposta": { type: "substantivo", def: "Contrária", eng: "opposite" },
"troca": { type: "substantivo", def: "Intercâmbio", eng: "exchange" },
"satisfeitos": { type: "substantivo", def: "Contentes", eng: "satisfied" },
"satisfeito": { type: "substantivo", def: "Contente", eng: "satisfied" },
"ouviram": { type: "substantivo", def: "Perceberam sons", eng: "heard" },
"trovejar": { type: "substantivo", def: "Soar como trovão", eng: "to thunder" },
"terceiro": { type: "substantivo", def: "Número 3 em ordem", eng: "third" },
"perseguindo": { type: "substantivo", def: "Seguindo", eng: "chasing" },
"primeiros": { type: "substantivo", def: "Os primeiros", eng: "first" },
"indagou": { type: "substantivo", def: "Perguntou", eng: "inquired" },
"buscam": { type: "substantivo", def: "Procuram", eng: "seek" },
"dormindo": { type: "substantivo", def: "A dormir", eng: "sleeping" },
"bocejando": { type: "substantivo", def: "Abrindo a boca de sono", eng: "yawning" },
"somente": { type: "substantivo", def: "Apenas, só", eng: "only" },
"achatando": { type: "substantivo", def: "Pressionando", eng: "pressing" },
"narizes": { type: "substantivo", def: "Órgãos do olfato", eng: "noses" },
"vidraças": { type: "substantivo", def: "Vidros de janelas", eng: "window panes" },
"sabem": { type: "substantivo", def: "Têm conhecimento", eng: "know" },
"procuram": { type: "substantivo", def: "Buscam", eng: "look for" },
"dedicam": { type: "substantivo", def: "Consagram", eng: "dedicate" },
"boneca": { type: "substantivo", def: "Brinquedo em forma humana", eng: "doll" },
"pano": { type: "substantivo", def: "Tecido", eng: "cloth" },
"levar": { type: "substantivo", def: "Transportar", eng: "to take" },
"choram": { type: "substantivo", def: "Derramam lágrimas", eng: "cry" },
"comerciante": { type: "substantivo", def: "Pessoa que comercia", eng: "merchant" },
"vendia": { type: "substantivo", def: "Comercializava", eng: "sold" },
"comprimidos": { type: "substantivo", def: "Pílulas, medicamentos", eng: "pills" },
"inventados": { type: "substantivo", def: "Criados", eng: "invented" },
"saciar": { type: "substantivo", def: "Satisfazer completamente", eng: "to quench" },
"engolir": { type: "substantivo", def: "Fazer passar pela garganta", eng: "to swallow" },
"comprimido": { type: "substantivo", def: "Pílula, medicamento", eng: "pill" },
"semana": { type: "substantivo", def: "Período de 7 dias", eng: "week" },
"sentiria": { type: "substantivo", def: "Experimentaria", eng: "would feel" },
"vendendo": { type: "substantivo", def: "Comercializando", eng: "selling" },
"poupam": { type: "substantivo", def: "Economizam", eng: "save" },
"enorme": { type: "substantivo", def: "Muito grande", eng: "enormous" },
"especialistas": { type: "substantivo", def: "Peritos, profissionais", eng: "specialists" },
"pílulas": { type: "substantivo", def: "Comprimidos", eng: "pills" },
"economiza": { type: "substantivo", def: "Poupa", eng: "saves" },
"faço": { type: "substantivo", def: "Verbo FAZER na 1ª pessoa", eng: "do" },
"gastar": { type: "substantivo", def: "Usar, despender", eng: "to spend" },
"quisesse": { type: "substantivo", def: "Verbo QUERER no subjuntivo", eng: "wanted" },
"caminharia": { type: "substantivo", def: "Andaria a pé", eng: "would walk" },
"prazerosamente": { type: "substantivo", def: "Com prazer", eng: "pleasantly" },
"fresca": { type: "substantivo", def: "Fria, refrigerada", eng: "fresh" },
"oitavo": { type: "substantivo", def: "Número 8 em ordem", eng: "eighth" },
"escutado": { type: "substantivo", def: "Ouvido", eng: "listened" },
"bebia": { type: "substantivo", def: "Ingeria líquido", eng: "drank" },
"última": { type: "substantivo", def: "Final, derradeira", eng: "last" },
"gota": { type: "substantivo", def: "Pequena quantidade de líquido", eng: "drop" },
"reserva": { type: "substantivo", def: "Estoque, provisão", eng: "reserve" },
"charmosas": { type: "substantivo", def: "Encantadoras", eng: "charming" },
"consegui": { type: "substantivo", def: "Alcancei, obtive", eng: "managed" },
"reparar": { type: "substantivo", def: "Consertar", eng: "to repair" },
"beber": { type: "substantivo", def: "Ingerir líquido", eng: "to drink" },
"ficaria": { type: "substantivo", def: "Permaneceria", eng: "would stay" },
"andar": { type: "substantivo", def: "Caminhar", eng: "to walk" },
"amiga": { type: "substantivo", def: "Pessoa querida", eng: "friend" },
"caro": { type: "substantivo", def: "Estimado", eng: "dear" },
"homenzinho": { type: "substantivo", def: "Homem pequeno", eng: "little man" },
"relaciona": { type: "substantivo", def: "Tem relação", eng: "relates" },
"raposa": { type: "substantivo", def: "Animal selvagem", eng: "fox" },
"ponto": { type: "substantivo", def: "Momento, instante", eng: "point" },
"seguiu": { type: "substantivo", def: "Acompanhou", eng: "followed" },
"raciocínio": { type: "substantivo", def: "Lógica, pensamento", eng: "reasoning" },
"entender": { type: "substantivo", def: "Compreender", eng: "to understand" },
"prestes": { type: "substantivo", def: "Perto de, a ponto de", eng: "about to" },
"forense": { type: "substantivo", def: "Jurídico, legal", eng: "forensic" },
"gesto": { type: "substantivo", def: "Movimento do corpo", eng: "gesture" },
"absurdo": { type: "substantivo", def: "Sem lógica", eng: "absurd" },
"poço": { type: "substantivo", def: "Buraco com água", eng: "well" },
"aleatória": { type: "substantivo", def: "Ao acaso", eng: "random" },
"imensidão": { type: "substantivo", def: "Vastidão, grandeza", eng: "immensity" },
"começamos": { type: "substantivo", def: "Iniciamos", eng: "began" },
"marchar": { type: "substantivo", def: "Caminhar", eng: "to march" },
"várias": { type: "substantivo", def: "Diversas, múltiplas", eng: "several" },
"escuridão": { type: "substantivo", def: "Ausência de luz", eng: "darkness" },
"tornara": { type: "substantivo", def: "Tinha tornado", eng: "had made" },
"febril": { type: "substantivo", def: "Com febre", eng: "feverish" },
"sonho": { type: "substantivo", def: "Visão durante o sono", eng: "dream" },
"últimas": { type: "substantivo", def: "Finais, derradeiras", eng: "last" },
"cambaleando": { type: "substantivo", def: "Andando sem equilíbrio", eng: "staggering" },
"memória": { type: "substantivo", def: "Capacidade de lembrar", eng: "memory" },
"entendi": { type: "substantivo", def: "Compreendi", eng: "understood" },
"impossível": { type: "substantivo", def: "Que não pode ser", eng: "impossible" },
"contradizê-lo": { type: "substantivo", def: "Opor-se a ele", eng: "to contradict him" },
"cansado": { type: "substantivo", def: "Fatigado", eng: "tired" },
"sentou-se": { type: "substantivo", def: "Colocou-se sentado", eng: "sat down" },
"sentei-me": { type: "substantivo", def: "Coloquei-me sentado", eng: "sat" },
"falou": { type: "substantivo", def: "Expressou-se", eng: "spoke" },
"respondi": { type: "substantivo", def: "Dei resposta", eng: "answered" },
"através": { type: "substantivo", def: "Por meio de", eng: "through" },
"cumes": { type: "substantivo", def: "Pontos mais altos", eng: "peaks" },
"prolongavam": { type: "substantivo", def: "Estendiam-se", eng: "extended" },
"adiante": { type: "substantivo", def: "À frente", eng: "ahead" },
"deserto": { type: "substantivo", def: "Região árida", eng: "desert" },
"senta": { type: "substantivo", def: "Coloca-se sentado", eng: "sits" },
"duna": { type: "substantivo", def: "Montanha de areia", eng: "dune" },
"palpita": { type: "substantivo", def: "Bate, pulsa", eng: "throbs" },
"brilha": { type: "substantivo", def: "Emite luz", eng: "shines" },
"esconde": { type: "substantivo", def: "Oculta", eng: "hides" },
"espantado": { type: "substantivo", def: "Surpreendido", eng: "astonished" },
"súbita": { type: "substantivo", def: "Repentina", eng: "sudden" },
"compreensão": { type: "substantivo", def: "Entendimento", eng: "understanding" },
"misteriosa": { type: "substantivo", def: "Enigmática", eng: "mysterious" },
"radiação": { type: "substantivo", def: "Emissão de energia", eng: "radiation" },
"pequeno": { type: "substantivo", def: "De pouca idade", eng: "young" },
"morava": { type: "substantivo", def: "Residia", eng: "lived" },
"lenda": { type: "substantivo", def: "História antiga", eng: "legend" },
"tesouro": { type: "substantivo", def: "Bem precioso", eng: "treasure" },
"enterrado": { type: "substantivo", def: "Posto debaixo da terra", eng: "buried" },
"certamente": { type: "substantivo", def: "Com certeza", eng: "certainly" },
"conseguido": { type: "substantivo", def: "Alcançado", eng: "managed" },
"encontrá-lo": { type: "substantivo", def: "Achá-lo", eng: "to find it" },
"sequer": { type: "substantivo", def: "Ao menos", eng: "even" },
"encantamento": { type: "substantivo", def: "Magia, fascínio", eng: "enchantment" },
"escondia": { type: "substantivo", def: "Ocultava", eng: "hid" },
"profundezas": { type: "substantivo", def: "Partes profundas", eng: "depths" },
"concorde": { type: "substantivo", def: "Esteja de acordo", eng: "agree" },
"adormeceu": { type: "substantivo", def: "Começou a dormir", eng: "fell asleep" },
"parti": { type: "substantivo", def: "Fui embora", eng: "left" },
"senti": { type: "substantivo", def: "Experimentei", eng: "felt" },
"profundamente": { type: "substantivo", def: "Muito, intensamente", eng: "deeply" },
"comovido": { type: "substantivo", def: "Emocionado", eng: "moved" },
"agitei-me": { type: "substantivo", def: "Movimentei-me", eng: "stirred" },
"pareceu-me": { type: "substantivo", def: "Pareceu-me", eng: "seemed to me" },
"carregando": { type: "substantivo", def: "Transportando", eng: "carrying" },
"frágil": { type: "substantivo", def: "Delicado, quebradiço", eng: "fragile" },
"testa": { type: "substantivo", def: "Parte da face", eng: "forehead" },
"pálida": { type: "substantivo", def: "Sem cor", eng: "pale" },
"fechados": { type: "substantivo", def: "Não abertos", eng: "closed" },
"mechas": { type: "substantivo", def: "Tiras de cabelo", eng: "locks" },
"cabelo": { type: "substantivo", def: "Fios que crescem na cabeça", eng: "hair" },
"tremulavam": { type: "substantivo", def: "Ondulavam", eng: "trembled" },
"concha": { type: "substantivo", def: "Carapaça de molusco", eng: "shell" },
"lábios": { type: "substantivo", def: "Partes da boca", eng: "lips" },
"abriram": { type: "substantivo", def: "Tornaram-se abertos", eng: "opened" },
"suspeita": { type: "substantivo", def: "Indício, sinal", eng: "hint" },
"sorriso": { type: "substantivo", def: "Expressão de alegria", eng: "smile" },
"move": { type: "substantivo", def: "Comove, toca", eng: "moves" },
"lealdade": { type: "substantivo", def: "Fidelidade", eng: "loyalty" },
"imagem": { type: "substantivo", def: "Figura, representação", eng: "image" },
"ser": { type: "substantivo", def: "Existência, criatura", eng: "being" },
"chama": { type: "substantivo", def: "Língua de fogo", eng: "flame" },
"lâmpada": { type: "substantivo", def: "Objeto de iluminação", eng: "lamp" },
"protegê-lo": { type: "substantivo", def: "Defendê-lo", eng: "to protect him" },
"extinta": { type: "substantivo", def: "Apagada", eng: "extinguished" },
"rajada": { type: "substantivo", def: "Sopro forte", eng: "gust" },
"caminhava": { type: "substantivo", def: "Andava a pé", eng: "walked" },
"encontrei": { type: "substantivo", def: "Achei", eng: "found" },
"raiar": { type: "substantivo", def: "Começar a aparecer", eng: "dawn" },
"fazem": { type: "substantivo", def: "Realizam", eng: "make" },
"expressos": { type: "substantivo", def: "Trens rápidos", eng: "express trains" },
"sabem": { type: "substantivo", def: "Têm conhecimento", eng: "know" },
"ficam": { type: "substantivo", def: "Permanecem", eng: "stay" },
"dando": { type: "substantivo", def: "Oferecendo", eng: "giving" },
"voltas": { type: "substantivo", def: "Giros, rotações", eng: "turns" },
"vale": { type: "substantivo", def: "Tem valor", eng: "worth" },
"tinham": { type: "substantivo", def: "Possuíam", eng: "had" },
"encontrado": { type: "substantivo", def: "Achado", eng: "found" },
"saara": { type: "substantivo", def: "Grande deserto", eng: "Sahara" },
"meros": { type: "substantivo", def: "Simples, apenas", eng: "mere" },
"buracos": { type: "substantivo", def: "Cavidades", eng: "holes" },
"cavados": { type: "substantivo", def: "Escavados", eng: "dug" },
"vila": { type: "substantivo", def: "Povoado", eng: "village" },
"pensava": { type: "substantivo", def: "Refletia", eng: "thought" },
"sonhando": { type: "substantivo", def: "A sonhar", eng: "dreaming" },
"estranho": { type: "substantivo", def: "Anormal, esquisito", eng: "strange" },
"pronto": { type: "substantivo", def: "Preparado", eng: "ready" },
"polia": { type: "substantivo", def: "Roldana", eng: "pulley" },
"balde": { type: "substantivo", def: "Recipiente para água", eng: "bucket" },
"puxou": { type: "substantivo", def: "Arrastou", eng: "pulled" },
"roldana": { type: "substantivo", def: "Mecanismo giratório", eng: "pulley" },
"gemeu": { type: "substantivo", def: "Fez som de lamento", eng: "groaned" },
"catavento": { type: "substantivo", def: "Aparelho que gira", eng: "weathervane" },
"tivesse": { type: "substantivo", def: "Verbo TER no subjuntivo", eng: "had" },
"esquecido": { type: "substantivo", def: "Não lembrado", eng: "forgotten" },
"ouviu": { type: "substantivo", def: "Percebeu sons", eng: "heard" },
"despertamos": { type: "substantivo", def: "Acordamos", eng: "awaken" },
"cantando": { type: "substantivo", def: "A cantar", eng: "singing" },
"cansasse": { type: "substantivo", def: "Ficasse cansado", eng: "get tired" },
"comigo": { type: "substantivo", def: "Com a minha pessoa", eng: "with me" },
"levantei": { type: "substantivo", def: "Ergui", eng: "lifted" },
"apoiei": { type: "substantivo", def: "Encostei", eng: "leaned" },
"mureta": { type: "substantivo", def: "Muro baixo", eng: "low wall" },
"realização": { type: "substantivo", def: "Concretização", eng: "achievement" },
"canção": { type: "substantivo", def: "Música, canto", eng: "song" },
"ouvidos": { type: "substantivo", def: "Órgãos da audição", eng: "ears" },
"podia": { type: "substantivo", def: "Tinha capacidade", eng: "could" },
"brilho": { type: "substantivo", def: "Luz, claridade", eng: "glow" },
"tremeluzindo": { type: "substantivo", def: "Tremulando", eng: "shimmering" },
"sedento": { type: "substantivo", def: "Com sede", eng: "thirsty" },
"dá": { type: "substantivo", def: "Oferece", eng: "give" },
"bebeu": { type: "substantivo", def: "Ingeriu líquido", eng: "drank" },
"doce": { type: "substantivo", def: "Saboroso, agradável", eng: "sweet" },
"festa": { type: "substantivo", def: "Celebração", eng: "feast" },
"realmente": { type: "substantivo", def: "De verdade", eng: "really" },
"alimento": { type: "substantivo", def: "Comida", eng: "food" },
"caminhada": { type: "substantivo", def: "Ato de caminhar", eng: "walk" },
"coração": { type: "substantivo", def: "Órgão vital, sentimentos", eng: "heart" },
"presente": { type: "substantivo", def: "Dádiva, brinde", eng: "gift" },
"garotinho": { type: "substantivo", def: "Menino pequeno", eng: "little boy" },
"luzes": { type: "substantivo", def: "Claridades", eng: "lights" },
"árvore": { type: "substantivo", def: "Planta grande", eng: "tree" },
"natal": { type: "substantivo", def: "Festa cristã", eng: "Christmas" },
"missa": { type: "substantivo", def: "Cerimônia religiosa", eng: "mass" },
"ternura": { type: "substantivo", def: "Carinho, afeto", eng: "tenderness" },
"rostos": { type: "substantivo", def: "Faces, caras", eng: "faces" },
"sorridentes": { type: "substantivo", def: "Que sorriem", eng: "smiling" },
"produziam": { type: "substantivo", def: "Geravam", eng: "produced" },
"presentes": { type: "substantivo", def: "Dádivas, brindes", eng: "gifts" },
"recebia": { type: "substantivo", def: "Obtinha", eng: "received" },
"vive": { type: "substantivo", def: "Reside, habita", eng: "live" },
"cultivam": { type: "substantivo", def: "Fazem crescer", eng: "cultivate" },
"encontram": { type: "substantivo", def: "Acham", eng: "find" },
"nele": { type: "substantivo", def: "Naquele", eng: "in it" },
"concordei": { type: "substantivo", def: "Estive de acordo", eng: "agreed" },
"entretanto": { type: "substantivo", def: "Porém, mas", eng: "however" },
"procuravam": { type: "substantivo", def: "Buscavam", eng: "were looking for" },
"poderia": { type: "substantivo", def: "Seria possível", eng: "could" },
"encontrada": { type: "substantivo", def: "Achada", eng: "found" },
"respirava": { type: "substantivo", def: "Inspirava ar", eng: "breathed" },
"facilmente": { type: "substantivo", def: "Com facilidade", eng: "easily" },
"mel": { type: "substantivo", def: "Produto das abelhas", eng: "honey" },
"trouxe": { type: "substantivo", def: "Levou até", eng: "brought" },
"promessa": { type: "substantivo", def: "Compromisso", eng: "promise" },
"baixinho": { type: "substantivo", def: "Em voz baixa", eng: "softly" },
"focinheira": { type: "substantivo", def: "Objeto para tapar focinho", eng: "muzzle" },
"responsável": { type: "substantivo", def: "Encarregado", eng: "responsible" },
"rascunhos": { type: "substantivo", def: "Esboços", eng: "drafts" },
"riu": { type: "substantivo", def: "Soltou risada", eng: "laughed" },
"repolhos": { type: "substantivo", def: "Vegetais", eng: "cabbages" },
"orgulhoso": { type: "substantivo", def: "Com orgulho", eng: "proud" },
"orelhas": { type: "substantivo", def: "Órgãos da audição", eng: "ears" },
"chifres": { type: "substantivo", def: "Protuberâncias na cabeça", eng: "horns" },
"compridas": { type: "substantivo", def: "Longas", eng: "long" },
"justo": { type: "substantivo", def: "Correto, equitativo", eng: "fair" },
"fiz": { type: "substantivo", def: "Realizei", eng: "made" },
"esboço": { type: "substantivo", def: "Desenho preliminar", eng: "sketch" },
"dei": { type: "substantivo", def: "Entreguei", eng: "gave" },
"partiu": { type: "substantivo", def: "Quebrou-se", eng: "broke" },
"planos": { type: "substantivo", def: "Projetos, intenções", eng: "plans" },
"desconheço": { type: "substantivo", def: "Não conheço", eng: "don't know" },
"chegada": { type: "substantivo", def: "Ato de chegar", eng: "arrival" },
"aniversário": { type: "substantivo", def: "Dia de nascimento", eng: "anniversary" },
"desci": { type: "substantivo", def: "Baixei", eng: "descended" },
"corou": { type: "substantivo", def: "Ficou vermelho", eng: "blushed" },
"ocorreu": { type: "substantivo", def: "Aconteceu", eng: "occurred" },
"acaso": { type: "substantivo", def: "Por coincidência", eng: "by chance" },
"conheci": { type: "substantivo", def: "Fiquei a conhecer", eng: "met" },
"passeando": { type: "substantivo", def: "Caminhando", eng: "strolling" },
"pousou": { type: "substantivo", def: "Desceu", eng: "landed" },
"hesitação": { type: "substantivo", def: "Indecisão", eng: "hesitation" },
"acrescentei": { type: "substantivo", def: "Adicionei", eng: "added" },
"ruborizou": { type: "substantivo", def: "Ficou vermelho", eng: "blushed" },
"ruboriza": { type: "substantivo", def: "Fica vermelho", eng: "blushes" },
"queria": { type: "substantivo", def: "Tinha vontade", eng: "meant" },
"temeroso": { type: "substantivo", def: "Com medo", eng: "fearful" },
"interrompeu": { type: "substantivo", def: "Cortou", eng: "interrupted" },
"retornar": { type: "substantivo", def: "Voltar", eng: "to return" },
"esperando": { type: "substantivo", def: "Aguardando", eng: "waiting" },
"volte": { type: "substantivo", def: "Regresse", eng: "come back" },
"tranquilo": { type: "substantivo", def: "Calmo, sereno", eng: "calm" },
"lembrei-me": { type: "substantivo", def: "Recordei-me", eng: "remembered" },
"corre-se": { type: "substantivo", def: "Há o risco", eng: "one runs" },
"chorar": { type: "substantivo", def: "Derramar lágrimas", eng: "to cry" },
"deixa": { type: "substantivo", def: "Permite", eng: "allows" },
"ruína": { type: "substantivo", def: "Destroço, restos", eng: "ruin" },
"muro": { type: "substantivo", def: "Parede externa", eng: "wall" },
"balançando": { type: "substantivo", def: "Movendo-se", eng: "swinging" },
"portanto": { type: "substantivo", def: "Por isso", eng: "therefore" },
"lembra": { type: "substantivo", def: "Recorda", eng: "remember" },
"exato": { type: "substantivo", def: "Preciso, correto", eng: "exact" },
"ponto": { type: "substantivo", def: "Local específico", eng: "point" },
"respondeu-lhe": { type: "substantivo", def: "Deu-lhe resposta", eng: "answered him" },
"certo": { type: "substantivo", def: "Correto, exato", eng: "right" },
"pista": { type: "substantivo", def: "Rastro, trilha", eng: "track" },
"começa": { type: "substantivo", def: "Inicia", eng: "begins" },
"veneno": { type: "substantivo", def: "Substância tóxica", eng: "poison" },
"certeza": { type: "substantivo", def: "Segurança, convicção", eng: "certainty" },
"sofrer": { type: "substantivo", def: "Padecer", eng: "to suffer" },
"parei": { type: "substantivo", def: "Interrompi", eng: "stopped" },
"dilacerado": { type: "substantivo", def: "Partido, rasgado", eng: "torn" },
"entendia": { type: "substantivo", def: "Compreendia", eng: "understood" },
"vá": { type: "substantivo", def: "Vai embora", eng: "go" },
"descer": { type: "substantivo", def: "Baixar", eng: "to descend" },
"baixei": { type: "substantivo", def: "Abaixei", eng: "lowered" },
"saltei": { type: "substantivo", def: "Pulei", eng: "jumped" },
"diante": { type: "substantivo", def: "Em frente", eng: "before" },
"dessas": { type: "substantivo", def: "Daquelas", eng: "those" },
"serpentes": { type: "substantivo", def: "Cobras, répteis", eng: "serpents" },
"amarelas": { type: "substantivo", def: "Da cor amarela", eng: "yellow" },
"cabo": { type: "substantivo", def: "Fim, termo", eng: "end" },
"revólver": { type: "substantivo", def: "Arma de fogo", eng: "revolver" },
"coldre": { type: "substantivo", def: "Estojo para arma", eng: "holster" },
"passo": { type: "substantivo", def: "Movimento ao andar", eng: "step" },
"correndo": { type: "substantivo", def: "A correr", eng: "running" },
"escondeu-se": { type: "substantivo", def: "Ocultou-se", eng: "hid" },
"corrente": { type: "substantivo", def: "Fluxo de água", eng: "stream" },
"seca": { type: "substantivo", def: "Sem água", eng: "dries" },
"rapidamente": { type: "substantivo", def: "Depressa", eng: "quickly" },
"desapareceu": { type: "substantivo", def: "Sumiu", eng: "disappeared" },
"metálico": { type: "substantivo", def: "De metal", eng: "metallic" },
"cheguei": { type: "substantivo", def: "Alcancei", eng: "arrived" },
"pegar": { type: "substantivo", def: "Agarrar", eng: "to catch" },
"branco": { type: "substantivo", def: "Cor clara", eng: "white" },
"significa": { type: "substantivo", def: "Quer dizer", eng: "means" },
"afrouxado": { type: "substantivo", def: "Tornado menos apertado", eng: "loosened" },
"cachecol": { type: "substantivo", def: "Lenço de pescoço", eng: "scarf" },
"dourado": { type: "substantivo", def: "Da cor do ouro", eng: "golden" },
"umedecido": { type: "substantivo", def: "Tornado úmido", eng: "moistened" },
"têmporas": { type: "substantivo", def: "Lados da cabeça", eng: "temples" },
"ousei": { type: "substantivo", def: "Atrevi-me", eng: "dared" },
"gravemente": { type: "substantivo", def: "Seriamente", eng: "gravely" },
"colocou": { type: "substantivo", def: "Pôs", eng: "placed" },
"bater": { type: "substantivo", def: "Pulsar", eng: "to beat" },
"tiro": { type: "substantivo", def: "Disparo de arma", eng: "shot" },
"rifle": { type: "substantivo", def: "Arma de fogo longa", eng: "rifle" },
"descoberto": { type: "substantivo", def: "Achado", eng: "discovered" },
"acontecendo": { type: "substantivo", def: "Ocorrendo", eng: "happening" },
"vindo": { type: "substantivo", def: "Vindo", eng: "coming" },
"bem-sucedido": { type: "substantivo", def: "Com sucesso", eng: "successful" },
"além": { type: "substantivo", def: "Mais que", eng: "beyond" },
"ousado": { type: "substantivo", def: "Desejado", eng: "dared" },
"esperar": { type: "substantivo", def: "Aguardar, desejar", eng: "to hope" },
"longe": { type: "substantivo", def: "A grande distância", eng: "far" },
"mais": { type: "substantivo", def: "Em maior grau", eng: "more" },
"extraordinário": { type: "substantivo", def: "Fora do comum", eng: "extraordinary" },
"agarrei": { type: "substantivo", def: "Segurei", eng: "grabbed" },
"criancinha": { type: "substantivo", def: "Criança muito pequena", eng: "little child" },
"mergulhando": { type: "substantivo", def: "Afundando", eng: "diving" },
"abismo": { type: "substantivo", def: "Profundidade grande", eng: "abyss" },
"contê-lo": { type: "substantivo", def: "Segurá-lo", eng: "to contain him" },
"grave": { type: "substantivo", def: "Sério, solene", eng: "grave" },
"melancolicamente": { type: "substantivo", def: "Com melancolia", eng: "melancholically" },
"esperei": { type: "substantivo", def: "Aguardei", eng: "waited" },
"revivendo": { type: "substantivo", def: "Vivendo de novo", eng: "reliving" },
"congelado": { type: "substantivo", def: "Gelado", eng: "frozen" },
"irreparável": { type: "substantivo", def: "Que não se repara", eng: "irreparable" },
"sabia": { type: "substantivo", def: "Tinha conhecimento", eng: "knew" },
"suportar": { type: "substantivo", def: "Aguentar", eng: "to bear" },
"nunca": { type: "substantivo", def: "Em momento algum", eng: "never" },
"medo": { type: "substantivo", def: "Sentimento de temor", eng: "fear" },
"súplica": { type: "substantivo", def: "Pedido urgente", eng: "plea" },
"vê": { type: "substantivo", def: "Enxerga", eng: "see" },
"doce": { type: "substantivo", def: "Agradável, suave", eng: "sweet" },
"olhar": { type: "substantivo", def: "Dirigir a vista", eng: "to look" },
"guias": { type: "substantivo", def: "Orientadores", eng: "guides" },
"pequenas": { type: "substantivo", def: "De tamanho reduzido", eng: "small" },
"estudiosos": { type: "substantivo", def: "Pessoas que estudam", eng: "scholars" },
"riqueza": { type: "substantivo", def: "Abundância de bens", eng: "wealth" },
"calam": { type: "substantivo", def: "Ficam em silêncio", eng: "fall silent" },
"vivendo": { type: "substantivo", def: "A viver", eng: "living" },
"rindo": { type: "substantivo", def: "A rir", eng: "laughing" },
"rir": { type: "substantivo", def: "Dar risada", eng: "to laugh" },
"consolada": { type: "substantivo", def: "Confortada", eng: "consoled" },
"acalma": { type: "substantivo", def: "Torna calmo", eng: "calms" },
"dores": { type: "substantivo", def: "Sofrimentos", eng: "pains" },
"ficará": { type: "substantivo", def: "Permanecerá", eng: "will be" },
"desejará": { type: "substantivo", def: "Quererá", eng: "will wish" },
"abrirá": { type: "substantivo", def: "Tornará aberto", eng: "will open" },
"janela": { type: "substantivo", def: "Abertura na parede", eng: "window" },
"puro": { type: "substantivo", def: "Simples", eng: "pure" },
"surpresos": { type: "substantivo", def: "Admirados", eng: "surprised" },
"vê-lo": { type: "substantivo", def: "Vê-lo", eng: "to see you" },
"rindo": { type: "substantivo", def: "A rir", eng: "laughing" },
"dirá": { type: "substantivo", def: "Expressará", eng: "will say" },
"fazem": { type: "substantivo", def: "Realizam", eng: "make" },
"pensarão": { type: "substantivo", def: "Considerarão", eng: "will think" },
"louco": { type: "substantivo", def: "Sem juízo", eng: "crazy" },
"mágica": { type: "substantivo", def: "Encanto, feitiço", eng: "magic" },
"pobre": { type: "substantivo", def: "De baixa qualidade", eng: "poor" },
"lançarei": { type: "substantivo", def: "Atirarei", eng: "will cast" },
"lugar": { type: "substantivo", def: "Local, sítio", eng: "place" },
"sinos": { type: "substantivo", def: "Objetos que tocam", eng: "bells" },
"parecerá": { type: "substantivo", def: "Terá aparência", eng: "will seem" },
"sofrendo": { type: "substantivo", def: "A sofrer", eng: "suffering" },
"parecerei": { type: "substantivo", def: "Terei aparência", eng: "will seem" },
"mordê-lo": { type: "substantivo", def: "Picar com os dentes", eng: "to bite you" },
"maliciosas": { type: "substantivo", def: "Maldosas", eng: "malicious" },
"morder": { type: "substantivo", def: "Picar com os dentes", eng: "to bite" },
"diversão": { type: "substantivo", def: "Entretenimento", eng: "fun" },
"tranquilizá-lo": { type: "substantivo", def: "Acalmá-lo", eng: "to reassure him" },
"segunda": { type: "substantivo", def: "Número 2 em ordem", eng: "second" },
"partir": { type: "substantivo", def: "Ir embora", eng: "to leave" },
"afastou-se": { type: "substantivo", def: "Distanciou-se", eng: "moved away" },
"fazendo": { type: "substantivo", def: "Realizando", eng: "making" },
"consegui": { type: "substantivo", def: "Alcancei", eng: "managed" },
"alcançá-lo": { type: "substantivo", def: "Chegar até ele", eng: "to reach him" },
"caminhando": { type: "substantivo", def: "Andando a pé", eng: "walking" },
"rápido": { type: "substantivo", def: "Veloz", eng: "fast" },
"decidido": { type: "substantivo", def: "Determinado", eng: "determined" },
"pegou": { type: "substantivo", def: "Agarrou", eng: "took" },
"mão": { type: "substantivo", def: "Parte do corpo", eng: "hand" },
"erro": { type: "substantivo", def: "Engano, falha", eng: "mistake" },
"vindo": { type: "substantivo", def: "A vir", eng: "coming" },
"sofrerá": { type: "substantivo", def: "Padecerá", eng: "will suffer" },
"corpo": { type: "substantivo", def: "Organismo físico", eng: "body" },
"pesado": { type: "substantivo", def: "Com muito peso", eng: "heavy" },
"abandonada": { type: "substantivo", def: "Deixada", eng: "abandoned" },
"conchas": { type: "substantivo", def: "Carapaças", eng: "shells" },
"velhas": { type: "substantivo", def: "Antigas", eng: "old" },
"desanimado": { type: "substantivo", def: "Sem ânimo", eng: "discouraged" },
"olharei": { type: "substantivo", def: "Observarei", eng: "will look" },
"poços": { type: "substantivo", def: "Buracos com água", eng: "wells" },
"enferrujada": { type: "substantivo", def: "Com ferrugem", eng: "rusty" },
"derramarão": { type: "substantivo", def: "Espalharão", eng: "will pour" },
"divertido": { type: "substantivo", def: "Engraçado", eng: "fun" },
"terá": { type: "substantivo", def: "Possuirá", eng: "will have" },
"terei": { type: "substantivo", def: "Possuirei", eng: "will have" },
"fontes": { type: "substantivo", def: "Nascentes", eng: "springs" },
"chorando": { type: "substantivo", def: "A chorar", eng: "crying" },
"chegamos": { type: "substantivo", def: "Alcançámos", eng: "arrived" },
"deixe-me": { type: "substantivo", def: "Permita-me", eng: "let me" },
"decidiu": { type: "substantivo", def: "Tomou decisão", eng: "decided" },
"frágil": { type: "substantivo", def: "Delicada, quebradiça", eng: "fragile" },
"ingênua": { type: "substantivo", def: "Inocente", eng: "naive" },
"inúteis": { type: "substantivo", def: "Sem utilidade", eng: "useless" },
"proteger-se": { type: "substantivo", def: "Defender-se", eng: "to protect itself" },
"inteiro": { type: "substantivo", def: "Todo, completo", eng: "whole" },
"sentei": { type: "substantivo", def: "Coloquei-me sentado", eng: "sat" },
"capaz": { type: "substantivo", def: "Com capacidade", eng: "able" },
"levantar": { type: "substantivo", def: "Erguer", eng: "to get up" },
"hesitou": { type: "substantivo", def: "Ficou indeciso", eng: "hesitated" },
"levantou": { type: "substantivo", def: "Ergueu", eng: "got up" },
"flash": { type: "substantivo", def: "Clarão rápido", eng: "flash" },
"amarelo": { type: "substantivo", def: "Cor do ouro", eng: "yellow" },
"parou": { type: "substantivo", def: "Interrompeu movimento", eng: "stopped" },
"tombou": { type: "substantivo", def: "Caiu", eng: "fell" },
"caindo": { type: "substantivo", def: "A cair", eng: "falling" },
"chegou": { type: "substantivo", def: "Alcançou destino", eng: "reached" },
"passaram": { type: "substantivo", def: "Transcorreram", eng: "passed" },
"contei": { type: "substantivo", def: "Narrei", eng: "told" },
"retorno": { type: "substantivo", def: "Volta, regresso", eng: "return" },
"vivo": { type: "substantivo", def: "Com vida", eng: "alive" },
"consolada": { type: "substantivo", def: "Confortada", eng: "consoled" },
"totalmente": { type: "substantivo", def: "Completamente", eng: "totally" },
"voltou": { type: "substantivo", def: "Regressou", eng: "returned" },
"amanheceu": { type: "substantivo", def: "Raiou o dia", eng: "dawned" },
"adoro": { type: "substantivo", def: "Amo muito", eng: "adore" },
"ouvir": { type: "substantivo", def: "Perceber sons", eng: "to hear" },
"presilha": { type: "substantivo", def: "Fecho, fivela", eng: "buckle" },
"couro": { type: "substantivo", def: "Pele de animal", eng: "leather" },
"acrescentar": { type: "substantivo", def: "Adicionar", eng: "to add" },
"prendê-la": { type: "substantivo", def: "Fixá-la", eng: "to fasten it" },
"fico": { type: "substantivo", def: "Permaneço", eng: "stay" },
"perguntando": { type: "substantivo", def: "Fazendo perguntas", eng: "wondering" },
"estará": { type: "substantivo", def: "Estará", eng: "will be" },
"talvez": { type: "substantivo", def: "Possivelmente", eng: "perhaps" },
"comido": { type: "substantivo", def: "Ingerido", eng: "eaten" },
"protege": { type: "substantivo", def: "Defende", eng: "protects" },
"noites": { type: "substantivo", def: "Períodos escuros", eng: "nights" },
"cuida": { type: "substantivo", def: "Zela", eng: "takes care" },
"alegro": { type: "substantivo", def: "Fico alegre", eng: "rejoice" },
"doçura": { type: "substantivo", def: "Qualidade de doce", eng: "sweetness" },
"momentos": { type: "substantivo", def: "Instantes", eng: "moments" },
"distrair": { type: "substantivo", def: "Desviar atenção", eng: "to distract" },
"esquecer": { type: "substantivo", def: "Não lembrar", eng: "to forget" },
"mudança": { type: "substantivo", def: "Alteração", eng: "change" },
"mudam": { type: "substantivo", def: "Alteram-se", eng: "change" },
"algum": { type: "substantivo", def: "Determinado", eng: "some" },
"naufragar": { type: "substantivo", def: "Afundar em naufrágio", eng: "to shipwreck" },
"entenderá": { type: "substantivo", def: "Compreenderá", eng: "will understand" },
"importância": { type: "substantivo", def: "Relevância, valor", eng: "importance" },
"paisagem": { type: "substantivo", def: "Vista natural", eng: "landscape" },
"capítulo": { type: "substantivo", def: "Divisão de livro", eng: "chapter" },
"anterior": { type: "substantivo", def: "Que vem antes", eng: "previous" },
"coloquei-a": { type: "substantivo", def: "Pus-la", eng: "put it" },
"novamente": { type: "substantivo", def: "Outra vez", eng: "again" },
"imprimi-la": { type: "substantivo", def: "Gravá-la", eng: "to imprint it" },
"reconhecê-la": { type: "substantivo", def: "Identificá-la", eng: "to recognize it" },
"africano": { type: "substantivo", def: "Da África", eng: "African" },
"cair": { type: "substantivo", def: "Ir ao chão", eng: "to fall" },
"local": { type: "substantivo", def: "Lugar, sítio", eng: "place" },
"apresse": { type: "substantivo", def: "Faça depressa", eng: "hurry" },
"nisso": { type: "substantivo", def: "Naquilo", eng: "in that" },
"risonho": { type: "substantivo", def: "Que ri", eng: "laughing" },
"cabelos": { type: "substantivo", def: "Fios que crescem na cabeça", eng: "hair" },
"recusa": { type: "substantivo", def: "Nega", eng: "refuses" },
"responder": { type: "substantivo", def: "Dar resposta", eng: "to answer" },
"saberá": { type: "substantivo", def: "Terá conhecimento", eng: "will know" },
"acontecer": { type: "substantivo", def: "Ocorrer", eng: "to happen" },
"conforte-me": { type: "substantivo", def: "Console-me", eng: "comfort me" },
"conte-me": { type: "substantivo", def: "Narre-me", eng: "tell me" },

    // --- VERBOS ---
    "tinha": { type: "verbo", def: "Verbo TER no pretérito imperfeito", eng: "had" },
    "tive": { type: "verbo", def: "Verbo TER no pretérito perfeito", eng: "had" },
    "ter": { type: "verbo", def: "Verbo TER (infinitivo)", eng: "to have" },
    "tem": { type: "verbo", def: "Verbo TER no presente", eng: "has" },
    "tenho": { type: "verbo", def: "Verbo TER no presente", eng: "have" },
    "vi": { type: "verbo", def: "Verbo VER no pretérito perfeito", eng: "saw" },
    "ver": { type: "verbo", def: "Verbo VER (infinitivo)", eng: "to see" },
    "vê-la": { type: "verbo", def: "Verbo VER + pronome", eng: "to see it" },
    "vê-los": { type: "verbo", def: "Verbo VER + pronome", eng: "to see them" },
    "chamado": { type: "verbo", def: "Verbo CHAMAR (particípio)", eng: "called" },
    "era": { type: "verbo", def: "Verbo SER no pretérito imperfeito", eng: "was" },
    "é": { type: "verbo", def: "Verbo SER no presente", eng: "is" },
    "foi": { type: "verbo", def: "Verbo SER/IR no pretérito perfeito", eng: "was/went" },
    "são": { type: "verbo", def: "Verbo SER no presente", eng: "are" },
    "ser": { type: "verbo", def: "Verbo SER (infinitivo)", eng: "to be" },
    "for": { type: "verbo", def: "Verbo SER no futuro do subjuntivo", eng: "are" },
    "seria": { type: "verbo", def: "Verbo SER no futuro do pretérito", eng: "would be" },
    "seriam": { type: "verbo", def: "Verbo SER no futuro do pretérito", eng: "would be" },
    "seja": { type: "verbo", def: "Verbo SER no presente do subjuntivo", eng: "is/be" },
    "sido": { type: "verbo", def: "Verbo SER (particípio)", eng: "been" },
    "engolir": { type: "verbo", def: "Fazer passar pela garganta", eng: "to swallow" },
    "engolem": { type: "verbo", def: "Verbo ENGOLIR no presente", eng: "swallow" },
    "mastigar": { type: "verbo", def: "Triturar com os dentes", eng: "to chew" },
    "mover": { type: "verbo", def: "Deslocar-se", eng: "to move" },
    "dormem": { type: "verbo", def: "Verbo DORMIR no presente", eng: "sleep" },
    "dormir": { type: "verbo", def: "Verbo DORMIR (infinitivo)", eng: "to sleep" },
    "pensei": { type: "verbo", def: "Verbo PENSAR no pretérito perfeito", eng: "thought" },
    "pensam": { type: "verbo", def: "Verbo PENSAR no presente", eng: "think" },
    "pensou": { type: "verbo", def: "Verbo PENSAR no pretérito perfeito", eng: "thought" },
    "consegui": { type: "verbo", def: "Verbo CONSEGUIR no pretérito perfeito", eng: "managed" },
    "fazer": { type: "verbo", def: "Criar, realizar", eng: "to make" },
    "fez": { type: "verbo", def: "Verbo FAZER no pretérito perfeito", eng: "made" },
    "fiz": { type: "verbo", def: "Verbo FAZER no pretérito perfeito", eng: "made" },
    "fazia": { type: "verbo", def: "Verbo FAZER no pretérito imperfeito", eng: "made/did" },
    "fazia-me": { type: "verbo", def: "Verbo FAZER + pronome", eng: "made myself" },
    "faça-me": { type: "verbo", def: "Verbo FAZER + pronome (imperativo)", eng: "make me" },
    "feita": { type: "verbo", def: "Verbo FAZER (particípio)", eng: "made" },
    "parecia": { type: "verbo", def: "Verbo PARECER no pretérito imperfeito", eng: "looked like/seemed" },
    "parecer": { type: "verbo", def: "Verbo PARECER (infinitivo)", eng: "to seem" },
    "pareceu": { type: "verbo", def: "Verbo PARECER no pretérito perfeito", eng: "seemed" },
    "mostrei": { type: "verbo", def: "Verbo MOSTRAR no pretérito perfeito", eng: "showed" },
    "mostrar-lhe": { type: "verbo", def: "Verbo MOSTRAR + pronome", eng: "to show him/her" },
    "perguntei-lhes": { type: "verbo", def: "Verbo PERGUNTAR + pronome", eng: "asked them" },
    "perguntou": { type: "verbo", def: "Verbo PERGUNTAR no pretérito perfeito", eng: "asked" },
    "perguntava": { type: "verbo", def: "Verbo PERGUNTAR no pretérito imperfeito", eng: "asked" },
    "perguntam": { type: "verbo", def: "Verbo PERGUNTAR no presente", eng: "ask" },
    "assustava": { type: "verbo", def: "Verbo ASSUSTAR no pretérito imperfeito", eng: "scared" },
    "disseram": { type: "verbo", def: "Verbo DIZER no pretérito perfeito", eng: "said" },
    "disse": { type: "verbo", def: "Verbo DIZER no pretérito perfeito", eng: "said" },
    "dito": { type: "verbo", def: "Verbo DIZER (particípio)", eng: "said" },
    "dizendo": { type: "verbo", def: "Verbo DIZER (gerúndio)", eng: "saying" },
    "dizia": { type: "verbo", def: "Verbo DIZER no pretérito imperfeito", eng: "said" },
    "diga": { type: "verbo", def: "Verbo DIZER (imperativo)", eng: "tell" },
    "dizem": { type: "verbo", def: "Verbo DIZER no presente", eng: "say" },
    "diz": { type: "verbo", def: "Verbo DIZER no presente", eng: "says" },
    "dizer": { type: "verbo", def: "Verbo DIZER (infinitivo)", eng: "to say" },
    "dizer-lhes": { type: "verbo", def: "Verbo DIZER + pronome", eng: "to tell them" },
    "disser": { type: "verbo", def: "Verbo DIZER no futuro do subjuntivo", eng: "tell" },
    "causaria": { type: "verbo", def: "Verbo CAUSAR no futuro do pretérito", eng: "would cause" },
    "digerindo": { type: "verbo", def: "Verbo DIGERIR (gerúndio)", eng: "digesting" },
    "compreendê-lo": { type: "verbo", def: "Verbo COMPREENDER + pronome", eng: "to understand it" },
    "compreendem": { type: "verbo", def: "Verbo COMPREENDER no presente", eng: "understand" },
    "compreendemos": { type: "verbo", def: "Verbo COMPREENDER no presente", eng: "understand" },
    "desenhei": { type: "verbo", def: "Verbo DESENHAR no pretérito perfeito", eng: "drew" },
    "desenhar": { type: "verbo", def: "Verbo DESENHAR (infinitivo)", eng: "to draw" },
    "desenha-me": { type: "verbo", def: "Verbo DESENHAR + pronome (imperativo)", eng: "draw me" },
    "desenhado": { type: "verbo", def: "Verbo DESENHAR (particípio)", eng: "drawn" },
    "pudessem": { type: "verbo", def: "Verbo PODER no pretérito imperfeito do subjuntivo", eng: "could" },
    "pudesse": { type: "verbo", def: "Verbo PODER no pretérito imperfeito do subjuntivo", eng: "could" },
    "podem": { type: "verbo", def: "Verbo PODER no presente", eng: "can" },
    "posso": { type: "verbo", def: "Verbo PODER no presente", eng: "can" },
    "pode": { type: "verbo", def: "Verbo PODER no presente", eng: "can" },
    "podia": { type: "verbo", def: "Verbo PODER no pretérito imperfeito", eng: "could" },
    "poderia": { type: "verbo", def: "Verbo PODER no futuro do pretérito", eng: "could" },
    "poderá": { type: "verbo", def: "Verbo PODER no futuro", eng: "will be able" },
    "possa": { type: "verbo", def: "Verbo PODER no presente do subjuntivo", eng: "can" },
    "precisam": { type: "verbo", def: "Verbo PRECISAR no presente", eng: "need" },
    "preciso": { type: "verbo", def: "Verbo PRECISAR no presente", eng: "need" },
    "precisará": { type: "verbo", def: "Verbo PRECISAR no futuro", eng: "will need" },
    "precisava": { type: "verbo", def: "Verbo PRECISAR no pretérito imperfeito", eng: "needed" },
    "explicadas": { type: "verbo", def: "Verbo EXPLICAR (particípio)", eng: "explained" },
    "explicar": { type: "verbo", def: "Verbo EXPLICAR (infinitivo)", eng: "to explain" },
    "ficou": { type: "verbo", def: "Verbo FICAR no pretérito perfeito", eng: "became/stayed" },
    "ficava": { type: "verbo", def: "Verbo FICAR no pretérito imperfeito", eng: "became/stayed" },
    "fiquei": { type: "verbo", def: "Verbo FICAR no pretérito perfeito", eng: "became/stayed" },
    "aconselhar": { type: "verbo", def: "Dar conselho", eng: "to advise" },
    "deixar": { type: "verbo", def: "Abandonar, parar", eng: "to leave" },
    "deixariam": { type: "verbo", def: "Verbo DEIXAR no futuro do pretérito", eng: "would leave" },
    "dedicar-me": { type: "verbo", def: "Verbo DEDICAR-SE", eng: "to dedicate myself" },
    "desisti": { type: "verbo", def: "Verbo DESISTIR no pretérito perfeito", eng: "gave up" },
    "estava": { type: "verbo", def: "Verbo ESTAR no pretérito imperfeito", eng: "was" },
    "está": { type: "verbo", def: "Verbo ESTAR no presente", eng: "is" },
    "estar": { type: "verbo", def: "Verbo ESTAR (infinitivo)", eng: "to be" },
    "estivesse": { type: "verbo", def: "Verbo ESTAR no pretérito imperfeito do subjuntivo", eng: "were" },
    "estou": { type: "verbo", def: "Verbo ESTAR no presente", eng: "am" },
    "escolher": { type: "verbo", def: "Selecionar, optar", eng: "to choose" },
    "aprendi": { type: "verbo", def: "Verbo APRENDER no pretérito perfeito", eng: "learned" },
    "pilotar": { type: "verbo", def: "Conduzir aeronave", eng: "to pilot" },
    "voei": { type: "verbo", def: "Verbo VOAR no pretérito perfeito", eng: "flew" },
    "voa": { type: "verbo", def: "Verbo VOAR no presente", eng: "flies" },
    "voar": { type: "verbo", def: "Verbo VOAR (infinitivo)", eng: "to fly" },
    "distinguir": { type: "verbo", def: "Diferenciar, reconhecer", eng: "to distinguish" },
    "perde": { type: "verbo", def: "Verbo PERDER no presente", eng: "gets lost" },
    "perder": { type: "verbo", def: "Verbo PERDER (infinitivo)", eng: "to lose/get lost" },
    "vivi": { type: "verbo", def: "Verbo VIVER no pretérito perfeito", eng: "lived" },
    "vivia": { type: "verbo", def: "Verbo VIVER no pretérito imperfeito", eng: "lived" },
    "viver": { type: "verbo", def: "Verbo VIVER (infinitivo)", eng: "to live" },
    "melhorou": { type: "verbo", def: "Verbo MELHORAR no pretérito perfeito", eng: "improved" },
    "conhecia": { type: "verbo", def: "Verbo CONHECER no pretérito imperfeito", eng: "knew/met" },
    "conheci": { type: "verbo", def: "Verbo CONHECER no pretérito perfeito", eng: "met" },
    "conhecido": { type: "verbo", def: "Verbo CONHECER (particípio)", eng: "known" },
    "tentava": { type: "verbo", def: "Verbo TENTAR no pretérito imperfeito", eng: "tried" },
    "tentar": { type: "verbo", def: "Fazer uma tentativa", eng: "to try" },
    "tentando": { type: "verbo", def: "Verbo TENTAR (gerúndio)", eng: "trying" },
    "tento": { type: "verbo", def: "Verbo TENTAR no presente", eng: "try" },
    "mantive": { type: "verbo", def: "Verbo MANTER no pretérito perfeito", eng: "kept" },
    "gostaria": { type: "verbo", def: "Verbo GOSTAR no futuro do pretérito", eng: "would like" },
    "descobrir": { type: "verbo", def: "Encontrar, revelar", eng: "to discover" },
    "descobri": { type: "verbo", def: "Verbo DESCOBRIR no pretérito perfeito", eng: "discovered" },
    "descobre": { type: "verbo", def: "Verbo DESCOBRIR no presente", eng: "discovers" },
    "quer": { type: "verbo", def: "Verbo QUERER no presente", eng: "wants" },
    "quero": { type: "verbo", def: "Verbo QUERER no presente", eng: "want" },
    "queria": { type: "verbo", def: "Verbo QUERER no pretérito imperfeito", eng: "wanted" },
    "fosse": { type: "verbo", def: "Verbo SER no pretérito imperfeito do subjuntivo", eng: "were" },
    "falaria": { type: "verbo", def: "Verbo FALAR no futuro do pretérito", eng: "would speak" },
    "falar": { type: "verbo", def: "Expressar-se oralmente", eng: "to speak" },
    "falando": { type: "verbo", def: "Verbo FALAR (gerúndio)", eng: "speaking" },
    "fala": { type: "verbo", def: "Verbo FALAR no presente", eng: "speaks" },
    "falei": { type: "verbo", def: "Verbo FALAR no pretérito perfeito", eng: "spoke" },
    "agradá-la": { type: "verbo", def: "Verbo AGRADAR + pronome", eng: "to please her" },
    "encontrado": { type: "verbo", def: "Verbo ENCONTRAR (particípio)", eng: "found" },
    "conversar": { type: "verbo", def: "Dialogar, falar com alguém", eng: "to talk" },
    "havia": { type: "verbo", def: "Verbo HAVER no pretérito imperfeito", eng: "there was/had" },
    "haverá": { type: "verbo", def: "Verbo HAVER no futuro", eng: "there will be" },
    "há": { type: "verbo", def: "Verbo HAVER no presente", eng: "there is/are" },
    "quebrado": { type: "verbo", def: "Verbo QUEBRAR (particípio)", eng: "broken" },
    "pus-me": { type: "verbo", def: "Verbo PÔR-SE no pretérito perfeito", eng: "set myself" },
    "pus": { type: "verbo", def: "Verbo PÔR no pretérito perfeito", eng: "put" },
    "imaginar": { type: "verbo", def: "Criar mentalmente", eng: "to imagine" },
    "nascer": { type: "verbo", def: "Surgir, aparecer", eng: "to rise/be born" },
    "acordado": { type: "verbo", def: "Verbo ACORDAR (particípio)", eng: "awakened" },
    "faz-me": { type: "verbo", def: "Verbo FAZER + pronome", eng: "make me" },
    "atingido": { type: "verbo", def: "Verbo ATINGIR (particípio)", eng: "hit" },
    "esfreguei": { type: "verbo", def: "Verbo ESFREGAR no pretérito perfeito", eng: "rubbed" },
    "observei": { type: "verbo", def: "Verbo OBSERVAR no pretérito perfeito", eng: "observed" },
    "examinar": { type: "verbo", def: "Observar com atenção", eng: "to examine" },
    "desanimaram": { type: "verbo", def: "Verbo DESANIMAR no pretérito perfeito", eng: "discouraged" },
    "olhei": { type: "verbo", def: "Verbo OLHAR no pretérito perfeito", eng: "looked" },
    "olhou": { type: "verbo", def: "Verbo OLHAR no pretérito perfeito", eng: "looked" },
    "olhe": { type: "verbo", def: "Verbo OLHAR (imperativo)", eng: "look" },
    "esqueça": { type: "verbo", def: "Verbo ESQUECER (imperativo)", eng: "don't forget" },
    "esquecê-lo": { type: "verbo", def: "Verbo ESQUECER + pronome", eng: "to forget him" },
    "esquecer": { type: "verbo", def: "Deixar de lembrar", eng: "to forget" },
    "caído": { type: "verbo", def: "Verbo CAIR (particípio)", eng: "fallen" },
    "caiu": { type: "verbo", def: "Verbo CAIR no pretérito perfeito", eng: "fell" },
    "vagando": { type: "verbo", def: "Verbo VAGAR (gerúndio)", eng: "wandering" },
    "deu": { type: "verbo", def: "Verbo DAR no pretérito perfeito", eng: "gave" },
    "dar-lhe": { type: "verbo", def: "Verbo DAR + pronome", eng: "to give you" },
    "dá": { type: "verbo", def: "Verbo DAR no presente", eng: "gives" },
    "dariam": { type: "verbo", def: "Verbo DAR no futuro do pretérito", eng: "would give" },
    "dado": { type: "verbo", def: "Verbo DAR (particípio)", eng: "given" },
    "repetiu": { type: "verbo", def: "Verbo REPETIR no pretérito perfeito", eng: "repeated" },
    "ousa": { type: "verbo", def: "Verbo OUSAR no presente", eng: "dares" },
    "desobedecer": { type: "verbo", def: "Não obedecer", eng: "to disobey" },
    "tirei": { type: "verbo", def: "Verbo TIRAR no pretérito perfeito", eng: "took out" },
    "lembrei": { type: "verbo", def: "Verbo LEMBRAR no pretérito perfeito", eng: "remembered" },
    "concentrados": { type: "verbo", def: "Verbo CONCENTRAR (particípio)", eng: "concentrated" },
    "sei": { type: "verbo", def: "Verbo SABER no presente", eng: "know" },
    "soubesse": { type: "verbo", def: "Verbo SABER no pretérito imperfeito do subjuntivo", eng: "knew" },
    "sabia": { type: "verbo", def: "Verbo SABER no pretérito imperfeito", eng: "knew" },
    "sabem": { type: "verbo", def: "Verbo SABER no presente", eng: "know" },
    "respondeu": { type: "verbo", def: "Verbo RESPONDER no pretérito perfeito", eng: "answered" },
    "respondi": { type: "verbo", def: "Verbo RESPONDER no pretérito perfeito", eng: "replied" },
    "importa": { type: "verbo", def: "Verbo IMPORTAR no presente", eng: "matters" },
    "ouvir": { type: "verbo", def: "Perceber sons", eng: "to hear" },
    "saudar-me": { type: "verbo", def: "Verbo SAUDAR + pronome", eng: "to greet me" },
    "moro": { type: "verbo", def: "Verbo MORAR no presente", eng: "live" },
    "morar": { type: "verbo", def: "Verbo MORAR (infinitivo)", eng: "to live" },
    "sorriu": { type: "verbo", def: "Verbo SORRIR no pretérito perfeito", eng: "smiled" },
    "veja": { type: "verbo", def: "Verbo VER (imperativo)", eng: "see/look" },
    "rejeitado": { type: "verbo", def: "Verbo REJEITAR (particípio)", eng: "rejected" },
    "esgotou": { type: "verbo", def: "Verbo ESGOTAR no pretérito perfeito", eng: "ran out" },
    "começar": { type: "verbo", def: "Iniciar", eng: "to begin" },
    "atirei-lhe": { type: "verbo", def: "Verbo ATIRAR + pronome", eng: "threw at him" },
    "pediu": { type: "verbo", def: "Verbo PEDIR no pretérito perfeito", eng: "asked for" },
    "iluminar": { type: "verbo", def: "Tornar-se luminoso", eng: "to light up" },
    "acha": { type: "verbo", def: "Verbo ACHAR no presente", eng: "think" },
    "inclinou": { type: "verbo", def: "Verbo INCLINAR no pretérito perfeito", eng: "tilted" },
    "levei": { type: "verbo", def: "Verbo LEVAR no pretérito perfeito", eng: "took" },
    "entender": { type: "verbo", def: "Compreender", eng: "to understand" },
    "entendem": { type: "verbo", def: "Verbo ENTENDER no presente", eng: "understand" },
    "veio": { type: "verbo", def: "Verbo VIR no pretérito perfeito", eng: "came" },
    "vem": { type: "verbo", def: "Verbo VIR no presente", eng: "come" },
    "vêm": { type: "verbo", def: "Verbo VIR no presente (plural)", eng: "come" },
    "viera": { type: "verbo", def: "Verbo VIR no pretérito mais-que-perfeito", eng: "had come" },
    "vindo": { type: "verbo", def: "Verbo VIR (particípio)", eng: "come" },
    "partir": { type: "verbo", def: "Começar de/ir embora", eng: "to leave/start from" },
    "ditas": { type: "verbo", def: "Verbo DIZER (particípio feminino plural)", eng: "said" },
    "revelado": { type: "verbo", def: "Verbo REVELAR (particípio)", eng: "revealed" },
    "vou": { type: "verbo", def: "Verbo IR no presente", eng: "will/go" },
    "vai": { type: "verbo", def: "Verbo IR no presente", eng: "goes" },
    "exclamou": { type: "verbo", def: "Verbo EXCLAMAR no pretérito perfeito", eng: "exclaimed" },
    "exclamariam": { type: "verbo", def: "Verbo EXCLAMAR no futuro do pretérito", eng: "would exclaim" },
    "rebentou": { type: "verbo", def: "Verbo REBENTAR no pretérito perfeito", eng: "burst" },
    "irritou": { type: "verbo", def: "Verbo IRRITAR no pretérito perfeito", eng: "irritated" },
    "espero": { type: "verbo", def: "Verbo ESPERAR no presente", eng: "hope" },
    "esperando": { type: "verbo", def: "Verbo ESPERAR (gerúndio)", eng: "hoping" },
    "levados": { type: "verbo", def: "Verbo LEVAR (particípio)", eng: "taken" },
    "levar": { type: "verbo", def: "Transportar, conduzir", eng: "to take" },
    "acrescentou": { type: "verbo", def: "Verbo ACRESCENTAR no pretérito perfeito", eng: "added" },
    "vislumbrei": { type: "verbo", def: "Verbo VISLUMBRAR no pretérito perfeito", eng: "glimpsed" },
    "exigi": { type: "verbo", def: "Verbo EXIGIR no pretérito perfeito", eng: "demanded" },
    "exigem": { type: "verbo", def: "Verbo EXIGIR no presente", eng: "demand" },
    "balançou": { type: "verbo", def: "Verbo BALANÇAR no pretérito perfeito", eng: "shook" },
    "tirar": { type: "verbo", def: "Remover, retirar", eng: "to take away" },
    "afundou": { type: "verbo", def: "Verbo AFUNDAR no pretérito perfeito", eng: "sank" },
    "durou": { type: "verbo", def: "Verbo DURAR no pretérito perfeito", eng: "lasted" },
    "tomando": { type: "verbo", def: "Verbo TOMAR (gerúndio)", eng: "taking" },
    "encerrou-se": { type: "verbo", def: "Verbo ENCERRAR-SE no pretérito perfeito", eng: "enclosed himself" },
    "despertada": { type: "verbo", def: "Verbo DESPERTAR (particípio)", eng: "awakened" },
    "ir": { type: "verbo", def: "Deslocar-se", eng: "to go" },
    "usá-lo": { type: "verbo", def: "Verbo USAR + pronome", eng: "to use it" },
    "amarrá-lo": { type: "verbo", def: "Verbo AMARRAR + pronome", eng: "to tie it" },
    "amarrar": { type: "verbo", def: "Prender com corda", eng: "to tie" },
    "seguindo": { type: "verbo", def: "Verbo SEGUIR (gerúndio)", eng: "following/going" },
    "crer": { type: "verbo", def: "Acreditar", eng: "to believe" },
    "acreditou": { type: "verbo", def: "Verbo ACREDITAR no pretérito perfeito", eng: "believed" },
    "visto": { type: "verbo", def: "Verbo VER (particípio)", eng: "seen" },
    "determinou": { type: "verbo", def: "Verbo DETERMINAR no pretérito perfeito", eng: "determined" },
    "deveriam": { type: "verbo", def: "Verbo DEVER no pretérito imperfeito", eng: "should" },
    "devem": { type: "verbo", def: "Verbo DEVER no presente", eng: "should/must" },
    "devo": { type: "verbo", def: "Verbo DEVER no presente", eng: "must" },
    "mudar": { type: "verbo", def: "Alterar, modificar", eng: "to change" },
    "vestido": { type: "verbo", def: "Verbo VESTIR (particípio)", eng: "dressed" },
    "aceitou": { type: "verbo", def: "Verbo ACEITAR no pretérito perfeito", eng: "accepted" },
    "contei": { type: "verbo", def: "Verbo CONTAR no pretérito perfeito", eng: "told" },
    "gostam": { type: "verbo", def: "Verbo GOSTAR no presente", eng: "like" },
    "gosta": { type: "verbo", def: "Verbo GOSTAR no presente", eng: "likes" },
    "gostado": { type: "verbo", def: "Verbo GOSTAR (particípio)", eng: "liked" },
    "coleciona": { type: "verbo", def: "Verbo COLECIONAR no presente", eng: "collects" },
    "pesa": { type: "verbo", def: "Verbo PESAR no presente", eng: "weighs" },
    "ganha": { type: "verbo", def: "Verbo GANHAR no presente", eng: "earns" },
    "custar": { type: "verbo", def: "Ter preço", eng: "to cost" },
    "custa": { type: "verbo", def: "Verbo CUSTAR no presente", eng: "costs" },
    "existia": { type: "verbo", def: "Verbo EXISTIR no pretérito imperfeito", eng: "existed" },
    "existe": { type: "verbo", def: "Verbo EXISTIR no presente", eng: "exists" },
    "ria": { type: "verbo", def: "Verbo RIR no pretérito imperfeito", eng: "laughed" },
    "procurando": { type: "verbo", def: "Verbo PROCURAR (gerúndio)", eng: "looking for" },
    "resultaria": { type: "verbo", def: "Verbo RESULTAR no futuro do pretérito", eng: "would result" },
    "tratariam": { type: "verbo", def: "Verbo TRATAR no futuro do pretérito", eng: "would treat" },
    "convenceriam": { type: "verbo", def: "Verbo CONVENCER no futuro do pretérito", eng: "would convince" },
    "culpo": { type: "verbo", def: "Verbo CULPAR no presente", eng: "blame" },
    "leia": { type: "verbo", def: "Verbo LER no presente do subjuntivo", eng: "reads" },
    "sinto": { type: "verbo", def: "Verbo SENTIR no presente", eng: "feel" },
    "descrevê-lo": { type: "verbo", def: "Verbo DESCREVER + pronome", eng: "to describe him" },
    "tornar": { type: "verbo", def: "Transformar-se", eng: "to become" },
    "interessam": { type: "verbo", def: "Verbo INTERESSAR no presente", eng: "are interested" },
    "comprei": { type: "verbo", def: "Verbo COMPRAR no pretérito perfeito", eng: "bought" },
    "voltar": { type: "verbo", def: "Retornar", eng: "to return" },
    "errando": { type: "verbo", def: "Verbo ERRAR (gerúndio)", eng: "making mistakes" },
    "saio": { type: "verbo", def: "Verbo SAIR no presente", eng: "go/turn out" },
    "saia": { type: "verbo", def: "Verbo SAIR no presente do subjuntivo", eng: "turns out" },
    "cometer": { type: "verbo", def: "Praticar, fazer", eng: "to commit" },
    "perdoar": { type: "verbo", def: "Desculpar", eng: "to forgive" },
    "explicou": { type: "verbo", def: "Verbo EXPLICAR no pretérito perfeito", eng: "explained" },
    "envelhecer": { type: "verbo", def: "Tornar-se velho", eng: "to grow old" },
    "despertar": { type: "verbo", def: "Acordar, sair do sono", eng: "to awaken" },
    "despertada": { type: "verbo", def: "Acordada", eng: "awakened" },
    "desejar": { type: "verbo", def: "Ter vontade de", eng: "to desire" },
    "reconhece": { type: "verbo", def: "Identifica, conhece", eng: "recognizes" },
    "livrar": { type: "verbo", def: "Libertar-se de", eng: "to get rid of" },
    "perceber": { type: "verbo", def: "Notar, dar-se conta", eng: "to notice" },
    "espalhar": { type: "verbo", def: "Difundir, distribuir", eng: "to spread" },
    "perfurará": { type: "verbo", def: "Furará através", eng: "will pierce" },
    "dividirão": { type: "verbo", def: "Separarão em partes", eng: "will divide" },
    "arrancar": { type: "verbo", def: "Tirar com força", eng: "to pull out" },
    "distingam": { type: "verbo", def: "Diferenciem", eng: "distinguish" },
    "assemelham": { type: "verbo", def: "Parecem-se com", eng: "resemble" },
    "adiar": { type: "verbo", def: "Deixar para depois", eng: "to postpone" },
    "significa": { type: "verbo", def: "Quer dizer", eng: "means" },
    "negligenciou": { type: "verbo", def: "Descuidou", eng: "neglected" },
    "descreveu": { type: "verbo", def: "Narrou, explicou", eng: "described" },
    "adotar": { type: "verbo", def: "Assumir, tomar", eng: "to adopt" },
    "avisar": { type: "verbo", def: "Alertar, informar", eng: "to warn" },
    "trabalhei": { type: "verbo", def: "Executei trabalho", eng: "worked" },
    "perguntar": { type: "verbo", def: "Fazer pergunta", eng: "to ask" },
    "obtive": { type: "verbo", def: "Consegui", eng: "obtained" },
    "esperar": { type: "verbo", def: "Aguardar", eng: "to wait" },
    "riu": { type: "verbo", def: "Deu risada", eng: "laughed" },
    "sabe": { type: "verbo", def: "Tem conhecimento", eng: "knows" },
    "pondo": { type: "verbo", def: "Colocando", eng: "putting" },
    "mover": { type: "verbo", def: "Deslocar", eng: "to move" },
    "quiser": { type: "verbo", def: "Tiver vontade", eng: "want" },
    "adicionou": { type: "verbo", def: "Acrescentou", eng: "added" },
    "amamos": { type: "verbo", def: "Temos amor por", eng: "love" },
    "comem": { type: "verbo", def: "Ingerem alimento", eng: "eat" },
    "encontre": { type: "verbo", def: "Ache, localize", eng: "find" },
    "desapertar": { type: "verbo", def: "Afrouxar", eng: "to loosen" },
    "temia": { type: "verbo", def: "Tinha medo", eng: "feared" },
    "passar": { type: "verbo", def: "Ir além, decorrer", eng: "to pass" },
    "servem": { type: "verbo", def: "São úteis", eng: "serve" },
    "piscou": { type: "verbo", def: "Fechou os olhos rapidamente", eng: "blinked" },
    "tranquilizam": { type: "verbo", def: "Acalmam", eng: "reassure" },
    "acreditando": { type: "verbo", def: "Tendo fé em", eng: "believing" },
    "demoli-lo": { type: "verbo", def: "Destruí-lo", eng: "to demolish it" },
    "perturbara": { type: "verbo", def: "Tinha incomodado", eng: "had disturbed" },
    "gritei": { type: "verbo", def: "Falei alto", eng: "shouted" },
    "sentir": { type: "verbo", def: "Experimentar sensação", eng: "to feel" },
    "continuou": { type: "verbo", def: "Prosseguiu", eng: "continued" },
    "mistura": { type: "verbo", def: "Junta, combina", eng: "mixes" },
    "confunde": { type: "verbo", def: "Baralha, engana", eng: "confuses" },
    "jogou": { type: "verbo", def: "Lançou, atirou", eng: "threw" },
    "cheirou": { type: "verbo", def: "Sentiu o cheiro", eng: "smelled" },
    "olhou": { type: "verbo", def: "Dirigiu a vista", eng: "looked" },
    "amou": { type: "verbo", def: "Teve amor por", eng: "loved" },
    "somar": { type: "verbo", def: "Adicionar números", eng: "to add" },
    "inchar": { type: "verbo", def: "Aumentar de volume", eng: "to swell" },
    "produzem": { type: "verbo", def: "Geram, criam", eng: "produce" },
    "esforçam": { type: "verbo", def: "Fazem esforço", eng: "strive" },
    "crescerem": { type: "verbo", def: "Aumentarem de tamanho", eng: "to grow" },
    "destruir": { type: "verbo", def: "Aniquilar, arruinar", eng: "to destroy" },
    "dar": { type: "verbo", def: "Entregar, oferecer", eng: "to give" },
    "corou": { type: "verbo", def: "Ficou vermelho", eng: "blushed" },
    "ama": { type: "verbo", def: "Tem amor por", eng: "loves" },
    "fazê-lo": { type: "verbo", def: "Realizar isso", eng: "to do it" },
    "acha": { type: "verbo", def: "Pensa, considera", eng: "thinks" },
    "importava": { type: "verbo", def: "Tinha importância", eng: "mattered" },
    "levei-o": { type: "verbo", def: "Transportei-o", eng: "took him" },
    "embalei": { type: "verbo", def: "Ninei", eng: "rocked" },
    "colocar": { type: "verbo", def: "Pôr em lugar", eng: "to place" },
    "alcançá-lo": { type: "verbo", def: "Chegar até ele", eng: "to reach him" },
    "acompanhá-lo": { type: "verbo", def: "Ir junto com ele", eng: "to accompany him" },
    "seguir": { type: "verbo", def: "Ir atrás de", eng: "to follow" },
    "começou": { type: "verbo", def: "Iniciou", eng: "began" },
    "conhecer": { type: "verbo", def: "Ficar a saber", eng: "to know" },
    "vigiado": { type: "verbo", def: "Observado", eng: "watched" },
    "parou": { type: "verbo", def: "Cessou movimento", eng: "stopped" },
    "preparar": { type: "verbo", def: "Arranjar, organizar", eng: "to prepare" },
    "produzir": { type: "verbo", def: "Criar, gerar", eng: "to produce" },
    "emergir": { type: "verbo", def: "Surgir, aparecer", eng: "to emerge" },
    "satisfeita": { type: "verbo", def: "Contente", eng: "satisfied" },
    "concluir": { type: "verbo", def: "Terminar, finalizar", eng: "to conclude" },
    "escolheu": { type: "verbo", def: "Selecionou", eng: "chose" },
    "vestiu-se": { type: "verbo", def: "Pôs roupa", eng: "dressed" },
    "ajustando": { type: "verbo", def: "Arrumando", eng: "adjusting" },
    "amarrotada": { type: "verbo", def: "Amassada", eng: "wrinkled" },
    "aparecer": { type: "verbo", def: "Surgir, manifestar-se", eng: "to appear" },
    "durou": { type: "verbo", def: "Teve duração", eng: "lasted" },
    "mostrou": { type: "verbo", def: "Exibiu, apresentou", eng: "showed" },
    "bocejou": { type: "verbo", def: "Abriu a boca de sono", eng: "yawned" },
    "acordar": { type: "verbo", def: "Despertar do sono", eng: "to wake up" },
    "perdoe": { type: "verbo", def: "Desculpe", eng: "forgive" },
    "despenteadas": { type: "verbo", def: "Não penteadas", eng: "disheveled" },
    "conter": { type: "verbo", def: "Controlar, reprimir", eng: "to contain" },
    "admiração": { type: "verbo", def: "Sentimento de admirar", eng: "admiration" },
    "adivinhava": { type: "verbo", def: "Intuía, supunha", eng: "guessed" },
    "procurar": { type: "verbo", def: "Buscar", eng: "to look for" },
    "servia": { type: "verbo", def: "Atendia, prestava serviço", eng: "served" },
    "atormentá-lo": { type: "verbo", def: "Incomodá-lo", eng: "to torment him" },
    "detesto": { type: "verbo", def: "Odeio", eng: "detest" },
    "interrompeu-se": { type: "verbo", def: "Parou de falar", eng: "interrupted herself" },
    "forçou": { type: "verbo", def: "Obrigou", eng: "forced" },
    "sofresse": { type: "verbo", def: "Padecesse", eng: "suffered" },
    "duvidar": { type: "verbo", def: "Ter dúvida", eng: "to doubt" },
    "tomado": { type: "verbo", def: "Pegado, assumido", eng: "taken" },
    "escutado": { type: "verbo", def: "Ouvido", eng: "listened" },
    "lançou": { type: "verbo", def: "Atirou, projetou", eng: "cast" },
    "encher": { type: "verbo", def: "Completar, preencher", eng: "to fill" },
    "confidenciou-me": { type: "verbo", def: "Contou-me em segredo", eng: "confided in me" },
    "entender": { type: "verbo", def: "Compreender", eng: "to understand" },
    "julgar": { type: "verbo", def: "Avaliar, sentenciar", eng: "to judge" },
    "adivinhado": { type: "verbo", def: "Descoberto por intuição", eng: "guessed" },
    "corrido": { type: "verbo", def: "Fugido rapidamente", eng: "run" },
    "aproveitou": { type: "verbo", def: "Usou bem", eng: "took advantage of" },
    "colocou": { type: "verbo", def: "Pôs", eng: "placed" },
    "limpou": { type: "verbo", def: "Tornou limpo", eng: "cleaned" },
    "possuía": { type: "verbo", def: "Tinha", eng: "possessed" },
    "aquecer": { type: "verbo", def: "Tornar quente", eng: "to heat" },
    "extinguira": { type: "verbo", def: "Tinha apagado", eng: "had extinguished" },
    "queimam": { type: "verbo", def: "Ardem", eng: "burn" },
    "causam": { type: "verbo", def: "Provocam", eng: "cause" },
    "arrancou": { type: "verbo", def: "Tirou com força", eng: "pulled out" },
    "acreditava": { type: "verbo", def: "Tinha fé", eng: "believed" },
    "regou": { type: "verbo", def: "Irrigou", eng: "watered" },
    "preparou-se": { type: "verbo", def: "Organizou-se", eng: "prepared himself" },
    "percebeu": { type: "verbo", def: "Notou", eng: "noticed" },
    "chorar": { type: "verbo", def: "Derramar lágrimas", eng: "to cry" },
    "tossiu": { type: "verbo", def: "Fez som de tosse", eng: "coughed" },
    "sou": { type: "verbo", def: "Verbo SER 1ª pessoa", eng: "am" },
    "suportar": { type: "verbo", def: "Aguentar", eng: "to bear" },
    "mostrou": { type: "verbo", def: "Apresentou", eng: "showed" },
    "demoremos": { type: "verbo", def: "Percamos tempo", eng: "delay" },
    "decidiu": { type: "verbo", def: "Tomou decisão", eng: "decided" },
    "vá": { type: "verbo", def: "Ir embora (imperativo)", eng: "go" },
    "encontrou-se": { type: "verbo", def: "Deparou-se", eng: "found himself" },
    "visitá-los": { type: "verbo", def: "Ir vê-los", eng: "to visit them" },
    "aumentar": { type: "verbo", def: "Fazer crescer", eng: "to increase" },
    "habitado": { type: "verbo", def: "Ocupado por habitantes", eng: "inhabited" },
    "vestido": { type: "verbo", def: "Com roupa", eng: "dressed" },
    "sentado": { type: "verbo", def: "Posição de sentar", eng: "seated" },
    "reconhecer": { type: "verbo", def: "Identificar", eng: "to recognize" },
    "simplificado": { type: "verbo", def: "Tornado simples", eng: "simplified" },
    "aproxime-se": { type: "verbo", def: "Chegue perto", eng: "approach" },
    "sentar-se": { type: "verbo", def: "Colocar-se sentado", eng: "to sit down" },
    "ocupado": { type: "verbo", def: "Tomado, preenchido", eng: "occupied" },
    "manteve": { type: "verbo", def: "Conservou", eng: "kept" },
    "evitar": { type: "verbo", def: "Escapar de", eng: "to avoid" },
    "proíbo": { type: "verbo", def: "Impeço", eng: "forbid" },
    "ordeno": { type: "verbo", def: "Comando", eng: "order" },
    "assusta": { type: "verbo", def: "Causa medo", eng: "frightens" },
    "murmurou": { type: "verbo", def: "Disse baixinho", eng: "murmured" },
    "corando": { type: "verbo", def: "Ficando vermelho", eng: "blushing" },
    "gaguejou": { type: "verbo", def: "Falou com dificuldade", eng: "stuttered" },
    "vexado": { type: "verbo", def: "Envergonhado", eng: "vexed" },
    "insistia": { type: "verbo", def: "Persistia", eng: "insisted" },
    "respeitada": { type: "verbo", def: "Honrada", eng: "respected" },
    "tolerava": { type: "verbo", def: "Suportava", eng: "tolerated" },
    "obedecesse": { type: "verbo", def: "Cumprisse ordens", eng: "obeyed" },
    "arrumou": { type: "verbo", def: "Organizou", eng: "arranged" },
    "desculpe": { type: "verbo", def: "Perdoe (imperativo)", eng: "excuse" },
    "apressou-se": { type: "verbo", def: "Deu pressa", eng: "hurried" },
    "governa": { type: "verbo", def: "Comanda, dirige", eng: "governs" },
    "incluindo": { type: "verbo", def: "Abrangendo", eng: "including" },
    "obedecem": { type: "verbo", def: "Cumprem ordens", eng: "obey" },
    "permito": { type: "verbo", def: "Autorizo", eng: "allow" },
    "reuniu": { type: "verbo", def: "Juntou", eng: "gathered" },
    "solicite": { type: "verbo", def: "Peça", eng: "request" },
    "pôr": { type: "verbo", def: "Descer (sol)", eng: "to set" },
    "voar": { type: "verbo", def: "Deslocar-se pelo ar", eng: "to fly" },
    "escreva": { type: "verbo", def: "Redija", eng: "write" },
    "transforme": { type: "verbo", def: "Mude de forma", eng: "transform" },
    "executar": { type: "verbo", def: "Realizar", eng: "to execute" },
    "recebida": { type: "verbo", def: "Obtida", eng: "received" },
    "exigir": { type: "verbo", def: "Requerer", eng: "to demand" },
    "ordenar": { type: "verbo", def: "Comandar", eng: "to order" },
    "atirem": { type: "verbo", def: "Lancem-se", eng: "throw themselves" },
    "lembrou": { type: "verbo", def: "Recordou", eng: "remembered" },
    "consultou": { type: "verbo", def: "Examinou", eng: "consulted" },
    "obedecido": { type: "verbo", def: "Atendido", eng: "obeyed" },
    "lamentando": { type: "verbo", def: "Sentindo pesar", eng: "lamenting" },
    "retomar": { type: "verbo", def: "Continuar", eng: "to resume" },
    "percorri": { type: "verbo", def: "Atravessei", eng: "traveled through" },
    "cansa-me": { type: "verbo", def: "Torna-me cansado", eng: "tires me" },
    "virando-se": { type: "verbo", def: "Voltando-se", eng: "turning" },
    "julgar": { type: "verbo", def: "Avaliar, sentenciar", eng: "to judge" },
    "conseguir": { type: "verbo", def: "Alcançar êxito", eng: "to manage" },
    "acreditar": { type: "verbo", def: "Ter fé", eng: "to believe" },
    "ouvi": { type: "verbo", def: "Escutei", eng: "heard" },
    "condená-lo": { type: "verbo", def: "Sentenciá-lo", eng: "to condemn him" },
    "depender": { type: "verbo", def: "Estar condicionado", eng: "to depend" },
    "perdoá-lo": { type: "verbo", def: "Desculpá-lo", eng: "to forgive him" },
    "tratado": { type: "verbo", def: "Cuidado", eng: "treated" },
    "condenar": { type: "verbo", def: "Sentenciar", eng: "to condemn" },
    "completado": { type: "verbo", def: "Terminado", eng: "completed" },
    "afligir": { type: "verbo", def: "Causar aflição", eng: "to afflict" },
    "hesitou": { type: "verbo", def: "Ficou indeciso", eng: "hesitated" },
    "despediu": { type: "verbo", def: "Disse adeus", eng: "said goodbye" },
    "chamou": { type: "verbo", def: "Invocou", eng: "called" },
    "prestes": { type: "verbo", def: "A ponto de", eng: "about to" },
    "receber": { type: "verbo", def: "Acolher", eng: "to receive" },
    "chegava": { type: "verbo", def: "Estava chegando", eng: "was arriving" },
    "usando": { type: "verbo", def: "Utilizando", eng: "wearing" },
    "levantar": { type: "verbo", def: "Erguer", eng: "to raise" },
    "aclamam": { type: "verbo", def: "Aplaudem", eng: "acclaim" },
    "passa": { type: "verbo", def: "Vai além", eng: "passes" },
    "bater": { type: "verbo", def: "Golpear", eng: "to clap" },
    "sugeriu": { type: "verbo", def: "Propôs", eng: "suggested" },
    "bateu": { type: "verbo", def: "Golpeou", eng: "clapped" },
    "tirou": { type: "verbo", def: "Removeu", eng: "took off" },
    "cansou": { type: "verbo", def: "Ficou cansado", eng: "got tired" },
    "descer": { type: "verbo", def: "Baixar", eng: "to come down" },
    "admirar": { type: "verbo", def: "Ter admiração por", eng: "to admire" },
    "considera": { type: "verbo", def: "Julga", eng: "considers" },
    "encolhendo": { type: "verbo", def: "Diminuindo", eng: "shrugging" },
    "mergulhou": { type: "verbo", def: "Afundou", eng: "plunged" },
    "encontrou": { type: "verbo", def: "Achou", eng: "found" },
    "estou": { type: "verbo", def: "Verbo ESTAR 1ª pessoa", eng: "am" },
    "fazendo": { type: "verbo", def: "Realizando", eng: "doing" },
    "confessou": { type: "verbo", def: "Admitiu", eng: "confessed" },
    "insistiu": { type: "verbo", def: "Persistiu", eng: "insisted" },
    "ajudá-lo": { type: "verbo", def: "Auxiliá-lo", eng: "to help him" },
    "finalizou": { type: "verbo", def: "Terminou", eng: "finished" },
    "encerrou-se": { type: "verbo", def: "Fechou-se", eng: "enclosed himself" },
    "pertencia": { type: "verbo", def: "Era propriedade de", eng: "belonged" },
    "levantou": { type: "verbo", def: "Ergueu", eng: "raised" },
    "perturbado": { type: "verbo", def: "Incomodado", eng: "disturbed" },
    "ressoava": { type: "verbo", def: "Ecoava", eng: "resonated" },
    "cometi": { type: "verbo", def: "Pratiquei", eng: "committed" },
    "apaziguar": { type: "verbo", def: "Acalmar", eng: "to appease" },
    "brilham": { type: "verbo", def: "Emitem luz", eng: "shine" },
    "fazem": { type: "verbo", def: "Realizam", eng: "make" },
    "sonhar": { type: "verbo", def: "Ter sonhos", eng: "to dream" },
    "vadiando": { type: "verbo", def: "Perdendo tempo", eng: "loafing" },
    "vemos": { type: "verbo", def: "Enxergamos", eng: "see" },
    "veem": { type: "verbo", def: "Enxergam", eng: "see" },
    "possuo": { type: "verbo", def: "Tenho", eng: "possess" },
    "possuir": { type: "verbo", def: "Ter", eng: "to possess" },
    "pertencem": { type: "verbo", def: "São propriedade", eng: "belong" },
    "pensou": { type: "verbo", def: "Refletiu", eng: "thought" },
    "descobrir": { type: "verbo", def: "Achar, revelar", eng: "to discover" },
    "descoberto": { type: "verbo", def: "Achado", eng: "discovered" },
    "descoberta": { type: "verbo", def: "Achada", eng: "discovered" },
    "registra": { type: "verbo", def: "Anota oficialmente", eng: "registers" },
    "administro": { type: "verbo", def: "Gerencio", eng: "administer" },
    "conto": { type: "verbo", def: "Enumero", eng: "count" },
    "torno": { type: "verbo", def: "Faço de novo", eng: "turn" },
    "satisfeito": { type: "verbo", def: "Contente", eng: "satisfied" },
    "possuísse": { type: "verbo", def: "Tivesse", eng: "possessed" },
    "colocá-lo": { type: "verbo", def: "Pôr ele", eng: "to put it" },
    "levá-lo": { type: "verbo", def: "Transportá-lo", eng: "to take it" },
    "arrancar": { type: "verbo", def: "Tirar com força", eng: "to pluck" },
    "colocá-las": { type: "verbo", def: "Pôr elas", eng: "to put them" },
    "trancar": { type: "verbo", def: "Fechar com chave", eng: "to lock" },
    "rego": { type: "verbo", def: "Irrigo", eng: "water" },
    "limpo": { type: "verbo", def: "Torno limpo", eng: "clean" },
    "respondi": { type: "verbo", def: "Dei resposta", eng: "replied" },
    "abriu": { type: "verbo", def: "Tornou aberto", eng: "opened" },
    "encontrar": { type: "verbo", def: "Achar", eng: "to find" },
    "acendeu": { type: "verbo", def: "Tornou aceso", eng: "lit" },
    "apagou": { type: "verbo", def: "Desligou", eng: "put out" },
    "trouxesse": { type: "verbo", def: "Levasse até", eng: "brought" },
    "desperta": { type: "verbo", def: "Acorda", eng: "awakens" },
    "põe": { type: "verbo", def: "Coloca", eng: "puts" },
    "saudou": { type: "verbo", def: "Cumprimentou", eng: "greeted" },
    "acabou": { type: "verbo", def: "Terminou", eng: "finished" },
    "apagar": { type: "verbo", def: "Desligar", eng: "to put out" },
    "acender": { type: "verbo", def: "Ligar, iluminar", eng: "to light" },
    "enxugou": { type: "verbo", def: "Secou", eng: "wiped" },
    "decorado": { type: "verbo", def: "Ornamentado", eng: "decorated" },
    "apagava": { type: "verbo", def: "Desligava", eng: "put out" },
    "acendia": { type: "verbo", def: "Ligava", eng: "lit" },
    "relaxar": { type: "verbo", def: "Descansar", eng: "to relax" },
    "alteradas": { type: "verbo", def: "Mudadas", eng: "changed" },
    "descansar": { type: "verbo", def: "Repousar", eng: "to rest" },
    "dura": { type: "verbo", def: "Tem duração", eng: "lasts" },
    "acende": { type: "verbo", def: "Liga, ilumina", eng: "lights" },
    "apaga": { type: "verbo", def: "Desliga", eng: "puts out" },
    "deslocar": { type: "verbo", def: "Mover de lugar", eng: "to move" },
    "levá-lo": { type: "verbo", def: "Conduzi-lo", eng: "to take him" },
    "habitado": { type: "verbo", def: "Ocupado", eng: "inhabited" },
    "escrevia": { type: "verbo", def: "Redigia", eng: "wrote" },
    "exclamou": { type: "verbo", def: "Disse em voz alta", eng: "exclaimed" },
    "sentou-se": { type: "verbo", def: "Colocou-se sentado", eng: "sat down" },
    "perguntou": { type: "verbo", def: "Fez pergunta", eng: "asked" },
    "lançou": { type: "verbo", def: "Atirou", eng: "cast" },
    "recebe": { type: "verbo", def: "Acolhe", eng: "receives" },
    "anota": { type: "verbo", def: "Escreve", eng: "notes" },
    "ordena": { type: "verbo", def: "Comanda", eng: "orders" },
    "mentisse": { type: "verbo", def: "Dissesse mentira", eng: "lied" },
    "bebesse": { type: "verbo", def: "Ingerisse líquido", eng: "drank" },
    "anotaria": { type: "verbo", def: "Escreveria", eng: "would note" },
    "mostra": { type: "verbo", def: "Apresenta", eng: "shows" },
    "requer": { type: "verbo", def: "Exige", eng: "requires" },
    "forneça": { type: "verbo", def: "Dê", eng: "provide" },
    "trazidas": { type: "verbo", def: "Levadas até", eng: "brought" },
    "agitado": { type: "verbo", def: "Movimentado", eng: "excited" },
    "apontou": { type: "verbo", def: "Direcionou", eng: "pointed" },
    "colocadas": { type: "verbo", def: "Postas", eng: "placed" },
    "fornecido": { type: "verbo", def: "Dado", eng: "provided" },
    "colocá-las": { type: "verbo", def: "Pô-las", eng: "to put them" },
    "anotamos": { type: "verbo", def: "Escrevemos", eng: "note" },
    "registramos": { type: "verbo", def: "Anotamos", eng: "register" },
    "mudar": { type: "verbo", def: "Alterar", eng: "to change" },
    "esvaziar": { type: "verbo", def: "Tornar vazio", eng: "to empty" },
    "tratam": { type: "verbo", def: "Cuidam de", eng: "treat" },
    "escrevemos": { type: "verbo", def: "Redigimos", eng: "write" },
    "estejam": { type: "verbo", def: "Estiverem", eng: "are" },
    "importa": { type: "verbo", def: "Tem importância", eng: "matters" },
    "repeti": { type: "verbo", def: "Disse de novo", eng: "repeated" },
    "abandonado": { type: "verbo", def: "Deixado", eng: "abandoned" },
    "aconselha": { type: "verbo", def: "Recomenda", eng: "advises" },
    "embora": { type: "verbo", def: "Vá-se", eng: "away" },
    "contar": { type: "verbo", def: "Enumerar, narrar", eng: "to count/tell" },
    "esquecendo": { type: "verbo", def: "Não lembrando", eng: "forgetting" },
    "manter": { type: "verbo", def: "Conservar", eng: "to maintain" },
    "visto": { type: "verbo", def: "Observado", eng: "seen" },
    "regulados": { type: "verbo", def: "Controlados", eng: "regulated" },
    "acenderem": { type: "verbo", def: "Iluminarem", eng: "light" },
    "recolheriam": { type: "verbo", def: "Voltariam", eng: "would retire" },
    "entrariam": { type: "verbo", def: "Iriam para dentro", eng: "would enter" },
    "retirariam": { type: "verbo", def: "Sairiam", eng: "would withdraw" },
    "cometeriam": { type: "verbo", def: "Praticariam", eng: "would commit" },
    "viveriam": { type: "verbo", def: "Habitariam", eng: "would live" },
    "ocupariam": { type: "verbo", def: "Trabalhariam", eng: "would occupy" },
    "mentimos": { type: "verbo", def: "Dizemos mentira", eng: "lie" },
    "percebo": { type: "verbo", def: "Noto", eng: "realize" },
    "correr": { type: "verbo", def: "Ter risco", eng: "to run" },
    "ocupam": { type: "verbo", def: "Preenchem", eng: "occupy" },
    "ficassem": { type: "verbo", def: "Permanecessem", eng: "stayed" },
    "fazessem": { type: "verbo", def: "Realizassem", eng: "did" },
    "colocados": { type: "verbo", def: "Postos", eng: "placed" },
    "amontoada": { type: "verbo", def: "Empilhada", eng: "piled up" },
    "acreditarão": { type: "verbo", def: "Terão fé", eng: "will believe" },
    "imaginam": { type: "verbo", def: "Creem", eng: "imagine" },
    "preenchem": { type: "verbo", def: "Ocupam", eng: "fill" },
    "aconselhá-los": { type: "verbo", def: "Dar conselhos a eles", eng: "to advise them" },
    "fazerem": { type: "verbo", def: "Realizarem", eng: "to do" },
    "agradá-los": { type: "verbo", def: "Contentá-los", eng: "to please them" },
    "perca": { type: "verbo", def: "Desperdice", eng: "waste" },
    "chegou": { type: "verbo", def: "Alcançou", eng: "arrived" },
    "desceu": { type: "verbo", def: "Baixou", eng: "descended" },
    "atravessou": { type: "verbo", def: "Passou através", eng: "crossed" },
    "ergueu": { type: "verbo", def: "Levantou", eng: "raised" },
    "acendem": { type: "verbo", def: "Iluminam", eng: "light up" },
    "retomou": { type: "verbo", def: "Continuou", eng: "resumed" },
    "tocá-lo": { type: "verbo", def: "Encostá-lo", eng: "to touch him" },
    "mando": { type: "verbo", def: "Envio", eng: "send" },
    "viajar": { type: "verbo", def: "Fazer viagem", eng: "to travel" },
    "enroscou-se": { type: "verbo", def: "Enrolou-se", eng: "coiled" },
    "ajudá-lo": { type: "verbo", def: "Auxiliá-lo", eng: "to help him" },
    "entendo": { type: "verbo", def: "Compreendo", eng: "understand" },
    "resolvo": { type: "verbo", def: "Soluciono", eng: "solve" },
    "encontrou-se": { type: "verbo", def: "Deparou-se", eng: "encountered" },
    "passara": { type: "verbo", def: "Tinha passado", eng: "had passed" },
    "encontrá-los": { type: "verbo", def: "Achá-los", eng: "to find them" },
    "sopra": { type: "verbo", def: "Assopra", eng: "blows" },
    "escalou": { type: "verbo", def: "Subiu", eng: "climbed" },
    "conhecera": { type: "verbo", def: "Tinha conhecido", eng: "had known" },
    "subiam": { type: "verbo", def: "Iam para cima", eng: "rose" },
    "usava": { type: "verbo", def: "Utilizava", eng: "used" },
    "repetem": { type: "verbo", def: "Dizem de novo", eng: "repeat" },
    "aconteceu": { type: "verbo", def: "Ocorreu", eng: "happened" },
    "caminhar": { type: "verbo", def: "Andar a pé", eng: "to walk" },
    "levam": { type: "verbo", def: "Conduzem", eng: "lead" },
    "pareciam": { type: "verbo", def: "Tinham aparência", eng: "seemed" },
    "exigiu": { type: "verbo", def: "Demandou", eng: "demanded" },
    "visse": { type: "verbo", def: "Enxergasse", eng: "saw" },
    "tossiria": { type: "verbo", def: "Faria tosse", eng: "would cough" },
    "fingiria": { type: "verbo", def: "Simularia", eng: "would pretend" },
    "ridicularizada": { type: "verbo", def: "Zombada", eng: "ridiculed" },
    "fingir": { type: "verbo", def: "Simular", eng: "to pretend" },
    "cuidar": { type: "verbo", def: "Zelar", eng: "to care" },
    "humilhando": { type: "verbo", def: "Rebaixando", eng: "humiliating" },
    "permitiria": { type: "verbo", def: "Deixaria", eng: "would allow" },
    "morrer": { type: "verbo", def: "Falecer", eng: "to die" },
    "deitou-se": { type: "verbo", def: "Recostou-se", eng: "lay down" },
    "chorou": { type: "verbo", def: "Derramou lágrimas", eng: "cried" },
    "apareceu": { type: "verbo", def: "Surgiu", eng: "appeared" },
    "respondeu": { type: "verbo", def: "Deu resposta", eng: "answered" },
    "virou": { type: "verbo", def: "Voltou-se", eng: "turned" },
    "brincar": { type: "verbo", def: "Jogar", eng: "to play" },
    "propôs": { type: "verbo", def: "Sugeriu", eng: "proposed" },
    "cativada": { type: "verbo", def: "Conquistada", eng: "tamed" },
    "cativar": { type: "verbo", def: "Conquistar", eng: "to tame" },
    "procurando": { type: "verbo", def: "Buscando", eng: "looking for" },
    "caçam": { type: "verbo", def: "Perseguem animais", eng: "hunt" },
    "criam": { type: "verbo", def: "Fazem crescer", eng: "raise" },
    "estabelecer": { type: "verbo", def: "Criar", eng: "to establish" },
    "começando": { type: "verbo", def: "Iniciando", eng: "beginning" },
    "suspirou": { type: "verbo", def: "Soltou suspiro", eng: "sighed" },
    "voltou": { type: "verbo", def: "Retornou", eng: "returned" },
    "brilhar": { type: "verbo", def: "Emitir luz", eng: "to shine" },
    "conhecerei": { type: "verbo", def: "Saberei", eng: "will know" },
    "escondem": { type: "verbo", def: "Ocultam", eng: "hide" },
    "chamar": { type: "verbo", def: "Invocar", eng: "to call" },
    "tiveres": { type: "verbo", def: "Tiveres (subjuntivo)", eng: "have" },
    "cativado": { type: "verbo", def: "Conquistado", eng: "tamed" },
    "trará": { type: "verbo", def: "Levará", eng: "will bring" },
    "amarei": { type: "verbo", def: "Terei amor", eng: "will love" },
    "cativa-me": { type: "verbo", def: "Conquista-me", eng: "tame me" },
    "conhece": { type: "verbo", def: "Sabe", eng: "knows" },
    "cativou": { type: "verbo", def: "Conquistou", eng: "tamed" },
    "compram": { type: "verbo", def: "Adquirem", eng: "buy" },
    "queres": { type: "verbo", def: "Tens vontade", eng: "want" },
    "olharei": { type: "verbo", def: "Observarei", eng: "will look" },
    "teria": { type: "verbo", def: "Teria (condicional)", eng: "would have" },
    "voltares": { type: "verbo", def: "Regressares", eng: "return" },
    "vens": { type: "verbo", def: "Vens (presente)", eng: "come" },
    "aproxima": { type: "verbo", def: "Chega perto", eng: "approaches" },
    "deverei": { type: "verbo", def: "Terei de", eng: "should" },
    "saltarei": { type: "verbo", def: "Pularei", eng: "will jump" },
    "mostrar-lhe": { type: "verbo", def: "Demonstrar-lhe", eng: "to show you" },
    "venhas": { type: "verbo", def: "Venhas (subjuntivo)", eng: "come" },
    "saberei": { type: "verbo", def: "Terei conhecimento", eng: "will know" },
    "recebê-lo": { type: "verbo", def: "Acolhê-lo", eng: "to receive you" },
    "observar": { type: "verbo", def: "Notar", eng: "to observe" },
    "dançar": { type: "verbo", def: "Mover-se ao ritmo", eng: "to dance" },
    "dançassem": { type: "verbo", def: "Dançassem (subjuntivo)", eng: "danced" },
    "sofresse": { type: "verbo", def: "Padecesse", eng: "suffered" },
    "quis": { type: "verbo", def: "Quis (pretérito)", eng: "wanted" },
    "chorarei": { type: "verbo", def: "Derramarei lágrimas", eng: "will cry" },
    "sofrer": { type: "verbo", def: "Padecer", eng: "to suffer" },
    "retorquiu": { type: "verbo", def: "Respondeu", eng: "retorted" },
    "significam": { type: "verbo", def: "Têm significado", eng: "mean" },
    "cativaram": { type: "verbo", def: "Conquistaram", eng: "tamed" },
    "parece": { type: "verbo", def: "Tem aparência", eng: "seems" },
    "rego": { type: "verbo", def: "Irrigo", eng: "water" },
    "pus": { type: "verbo", def: "Coloquei", eng: "put" },
    "matei": { type: "verbo", def: "Eliminei", eng: "killed" },
    "preservei": { type: "verbo", def: "Conservei", eng: "preserved" },
    "tornarem": { type: "verbo", def: "Transformarem-se", eng: "become" },
    "resmunga": { type: "verbo", def: "Reclama baixo", eng: "grumbles" },
    "vangloria": { type: "verbo", def: "Orgulha-se", eng: "boasts" },
    "despedir-se": { type: "verbo", def: "Dar adeus", eng: "to say goodbye" },
    "repetiu": { type: "verbo", def: "Disse de novo", eng: "repeated" },
    "gastaste": { type: "verbo", def: "Usaste", eng: "spent" },
    "perdi": { type: "verbo", def: "Desperdicei", eng: "lost/spent" },
    "lembrar": { type: "verbo", def: "Recordar", eng: "to remember" },
    "esqueceram": { type: "verbo", def: "Não lembraram", eng: "forgot" },
    "torna": { type: "verbo", def: "Transforma", eng: "becomes" },
    "carregam": { type: "verbo", def: "Transportam", eng: "carry" },
    "direciono": { type: "verbo", def: "Guio", eng: "direct" },
    "balançou": { type: "verbo", def: "Abanou", eng: "shook" },
    "comentou": { type: "verbo", def: "Observou", eng: "commented" },
    "procuram": { type: "verbo", def: "Buscam", eng: "seek" },
    "trovejou": { type: "verbo", def: "Passou com ruído", eng: "thundered" },
    "ouviram": { type: "verbo", def: "Perceberam sons", eng: "heard" },
    "trovejar": { type: "verbo", def: "Soar como trovão", eng: "to thunder" },
    "perseguindo": { type: "verbo", def: "Seguindo", eng: "chasing" },
    "indagou": { type: "verbo", def: "Perguntou", eng: "inquired" },
    "buscam": { type: "verbo", def: "Procuram", eng: "seek" },
    "achatando": { type: "verbo", def: "Pressionando", eng: "pressing" },
    "sabem": { type: "verbo", def: "Têm conhecimento", eng: "know" },
    "dedicam": { type: "verbo", def: "Consagram", eng: "dedicate" },
    "levar": { type: "verbo", def: "Transportar", eng: "to take" },
    "choram": { type: "verbo", def: "Derramam lágrimas", eng: "cry" },
    "vendia": { type: "verbo", def: "Comercializava", eng: "sold" },
    "saciar": { type: "verbo", def: "Satisfazer", eng: "to quench" },
    "engolir": { type: "verbo", def: "Fazer passar pela garganta", eng: "to swallow" },
    "sentiria": { type: "verbo", def: "Experimentaria", eng: "would feel" },
    "vendendo": { type: "verbo", def: "Comercializando", eng: "selling" },
    "poupam": { type: "verbo", def: "Economizam", eng: "save" },
    "economiza": { type: "verbo", def: "Poupa", eng: "saves" },
    "faço": { type: "verbo", def: "Realizo", eng: "do" },
    "gastar": { type: "verbo", def: "Usar", eng: "to spend" },
    "quisesse": { type: "verbo", def: "Quisesse (subjuntivo)", eng: "wanted" },
    "caminharia": { type: "verbo", def: "Andaria a pé", eng: "would walk" },
    "bebia": { type: "verbo", def: "Ingeria líquido", eng: "drank" },
    "reparar": { type: "verbo", def: "Consertar", eng: "to repair" },
    "beber": { type: "verbo", def: "Ingerir líquido", eng: "to drink" },
    "ficaria": { type: "verbo", def: "Permaneceria", eng: "would stay" },
    "relaciona": { type: "verbo", def: "Tem relação", eng: "relates" },
    "seguiu": { type: "verbo", def: "Acompanhou", eng: "followed" },
    "começamos": { type: "verbo", def: "Iniciamos", eng: "began" },
    "marchar": { type: "verbo", def: "Caminhar", eng: "to march" },
    "tornara": { type: "verbo", def: "Tinha tornado", eng: "had made" },
    "entendi": { type: "verbo", def: "Compreendi", eng: "understood" },
    "contradizê-lo": { type: "verbo", def: "Opor-se a ele", eng: "to contradict him" },
    "sentou-se": { type: "verbo", def: "Colocou-se sentado", eng: "sat down" },
    "sentei-me": { type: "verbo", def: "Coloquei-me sentado", eng: "sat" },
    "falou": { type: "verbo", def: "Expressou-se", eng: "spoke" },
    "prolongavam": { type: "verbo", def: "Estendiam-se", eng: "extended" },
    "senta": { type: "verbo", def: "Coloca-se sentado", eng: "sits" },
    "palpita": { type: "verbo", def: "Bate", eng: "throbs" },
    "brilha": { type: "verbo", def: "Emite luz", eng: "shines" },
    "esconde": { type: "verbo", def: "Oculta", eng: "hides" },
    "morava": { type: "verbo", def: "Residia", eng: "lived" },
    "conseguido": { type: "verbo", def: "Alcançado", eng: "managed" },
    "escondia": { type: "verbo", def: "Ocultava", eng: "hid" },
    "concorde": { type: "verbo", def: "Esteja de acordo", eng: "agree" },
    "adormeceu": { type: "verbo", def: "Começou a dormir", eng: "fell asleep" },
    "parti": { type: "verbo", def: "Fui embora", eng: "left" },
    "senti": { type: "verbo", def: "Experimentei", eng: "felt" },
    "comovido": { type: "verbo", def: "Emocionado", eng: "moved" },
    "agitei-me": { type: "verbo", def: "Movimentei-me", eng: "stirred" },
    "pareceu-me": { type: "verbo", def: "Pareceu-me", eng: "seemed to me" },
    "carregando": { type: "verbo", def: "Transportando", eng: "carrying" },
    "tremulavam": { type: "verbo", def: "Ondulavam", eng: "trembled" },
    "abriram": { type: "verbo", def: "Tornaram-se abertos", eng: "opened" },
    "move": { type: "verbo", def: "Comove", eng: "moves" },
    "protegê-lo": { type: "verbo", def: "Defendê-lo", eng: "to protect him" },
    "caminhava": { type: "verbo", def: "Andava a pé", eng: "walked" },
    "encontrei": { type: "verbo", def: "Achei", eng: "found" },
    "raiar": { type: "verbo", def: "Começar a aparecer", eng: "dawn" },
    "fazem": { type: "verbo", def: "Realizam", eng: "make" },
    "ficam": { type: "verbo", def: "Permanecem", eng: "stay" },
    "dando": { type: "verbo", def: "Oferecendo", eng: "giving" },
    "vale": { type: "verbo", def: "Tem valor", eng: "worth" },
    "tinham": { type: "verbo", def: "Possuíam", eng: "had" },
    "pensava": { type: "verbo", def: "Refletia", eng: "thought" },
    "sonhando": { type: "verbo", def: "A sonhar", eng: "dreaming" },
    "puxou": { type: "verbo", def: "Arrastou", eng: "pulled" },
    "gemeu": { type: "verbo", def: "Fez som de lamento", eng: "groaned" },
    "tivesse": { type: "verbo", def: "Tivesse (subjuntivo)", eng: "had" },
    "ouviu": { type: "verbo", def: "Percebeu sons", eng: "heard" },
    "despertamos": { type: "verbo", def: "Acordamos", eng: "awaken" },
    "cantando": { type: "verbo", def: "A cantar", eng: "singing" },
    "cansasse": { type: "verbo", def: "Ficasse cansado", eng: "get tired" },
    "levantei": { type: "verbo", def: "Ergui", eng: "lifted" },
    "apoiei": { type: "verbo", def: "Encostei", eng: "leaned" },
    "tremeluzindo": { type: "verbo", def: "Tremulando", eng: "shimmering" },
    "dá": { type: "verbo", def: "Oferece", eng: "give" },
    "bebeu": { type: "verbo", def: "Ingeriu líquido", eng: "drank" },
    "vive": { type: "verbo", def: "Reside", eng: "live" },
    "cultivam": { type: "verbo", def: "Fazem crescer", eng: "cultivate" },
    "encontram": { type: "verbo", def: "Acham", eng: "find" },
    "concordei": { type: "verbo", def: "Estive de acordo", eng: "agreed" },
    "procuravam": { type: "verbo", def: "Buscavam", eng: "were looking for" },
    "encontrada": { type: "verbo", def: "Achada", eng: "found" },
    "respirava": { type: "verbo", def: "Inspirava ar", eng: "breathed" },
    "trouxe": { type: "verbo", def: "Levou até", eng: "brought" },
    "riu": { type: "verbo", def: "Soltou risada", eng: "laughed" },
    "fiz": { type: "verbo", def: "Realizei", eng: "made" },
    "dei": { type: "verbo", def: "Entreguei", eng: "gave" },
    "partiu": { type: "verbo", def: "Quebrou-se", eng: "broke" },
    "desconheço": { type: "verbo", def: "Não conheço", eng: "don't know" },
    "desci": { type: "verbo", def: "Baixei", eng: "descended" },
    "ocorreu": { type: "verbo", def: "Aconteceu", eng: "occurred" },
    "conheci": { type: "verbo", def: "Fiquei a conhecer", eng: "met" },
    "passeando": { type: "verbo", def: "Caminhando", eng: "strolling" },
    "pousou": { type: "verbo", def: "Desceu", eng: "landed" },
    "acrescentei": { type: "verbo", def: "Adicionei", eng: "added" },
    "ruborizou": { type: "verbo", def: "Ficou vermelho", eng: "blushed" },
    "ruboriza": { type: "verbo", def: "Fica vermelho", eng: "blushes" },
    "queria": { type: "verbo", def: "Tinha vontade", eng: "meant" },
    "interrompeu": { type: "verbo", def: "Cortou", eng: "interrupted" },
    "retornar": { type: "verbo", def: "Voltar", eng: "to return" },
    "esperando": { type: "verbo", def: "Aguardando", eng: "waiting" },
    "volte": { type: "verbo", def: "Regresse", eng: "come back" },
    "lembrei-me": { type: "verbo", def: "Recordei-me", eng: "remembered" },
    "corre-se": { type: "verbo", def: "Há o risco", eng: "one runs" },
    "deixa": { type: "verbo", def: "Permite", eng: "allows" },
    "lembra": { type: "verbo", def: "Recorda", eng: "remember" },
    "respondeu-lhe": { type: "verbo", def: "Deu-lhe resposta", eng: "answered him" },
    "começa": { type: "verbo", def: "Inicia", eng: "begins" },
    "parei": { type: "verbo", def: "Interrompi", eng: "stopped" },
    "entendia": { type: "verbo", def: "Compreendia", eng: "understood" },
    "baixei": { type: "verbo", def: "Abaixei", eng: "lowered" },
    "saltei": { type: "verbo", def: "Pulei", eng: "jumped" },
    "escondeu-se": { type: "verbo", def: "Ocultou-se", eng: "hid" },
    "desapareceu": { type: "verbo", def: "Sumiu", eng: "disappeared" },
    "cheguei": { type: "verbo", def: "Alcancei", eng: "arrived" },
    "pegar": { type: "verbo", def: "Agarrar", eng: "to catch" },
    "afrouxado": { type: "verbo", def: "Tornado menos apertado", eng: "loosened" },
    "umedecido": { type: "verbo", def: "Tornado úmido", eng: "moistened" },
    "ousei": { type: "verbo", def: "Atrevi-me", eng: "dared" },
    "colocou": { type: "verbo", def: "Pôs", eng: "placed" },
    "bater": { type: "verbo", def: "Pulsar", eng: "to beat" },
    "descoberto": { type: "verbo", def: "Achado", eng: "discovered" },
    "acontecendo": { type: "verbo", def: "Ocorrendo", eng: "happening" },
    "esperar": { type: "verbo", def: "Aguardar", eng: "to hope" },
    "agarrei": { type: "verbo", def: "Segurei", eng: "grabbed" },
    "mergulhando": { type: "verbo", def: "Afundando", eng: "diving" },
    "contê-lo": { type: "verbo", def: "Segurá-lo", eng: "to contain him" },
    "esperei": { type: "verbo", def: "Aguardei", eng: "waited" },
    "revivendo": { type: "verbo", def: "Vivendo de novo", eng: "reliving" },
    "sabia": { type: "verbo", def: "Tinha conhecimento", eng: "knew" },
    "vê": { type: "verbo", def: "Enxerga", eng: "see" },
    "olhar": { type: "verbo", def: "Dirigir a vista", eng: "to look" },
    "calam": { type: "verbo", def: "Ficam em silêncio", eng: "fall silent" },
    "vivendo": { type: "verbo", def: "A viver", eng: "living" },
    "rindo": { type: "verbo", def: "A rir", eng: "laughing" },
    "rir": { type: "verbo", def: "Dar risada", eng: "to laugh" },
    "consolada": { type: "verbo", def: "Confortada", eng: "consoled" },
    "acalma": { type: "verbo", def: "Torna calmo", eng: "calms" },
    "ficará": { type: "verbo", def: "Permanecerá", eng: "will be" },
    "desejará": { type: "verbo", def: "Quererá", eng: "will wish" },
    "abrirá": { type: "verbo", def: "Tornará aberto", eng: "will open" },
    "vê-lo": { type: "verbo", def: "Enxergá-lo", eng: "to see you" },
    "dirá": { type: "verbo", def: "Expressará", eng: "will say" },
    "pensarão": { type: "verbo", def: "Considerarão", eng: "will think" },
    "lançarei": { type: "verbo", def: "Atirarei", eng: "will cast" },
    "parecerá": { type: "verbo", def: "Terá aparência", eng: "will seem" },
    "sofrendo": { type: "verbo", def: "A sofrer", eng: "suffering" },
    "parecerei": { type: "verbo", def: "Terei aparência", eng: "will seem" },
    "mordê-lo": { type: "verbo", def: "Picar com os dentes", eng: "to bite you" },
    "morder": { type: "verbo", def: "Picar com os dentes", eng: "to bite" },
    "tranquilizá-lo": { type: "verbo", def: "Acalmá-lo", eng: "to reassure him" },
    "partir": { type: "verbo", def: "Ir embora", eng: "to leave" },
    "afastou-se": { type: "verbo", def: "Distanciou-se", eng: "moved away" },
    "alcançá-lo": { type: "verbo", def: "Chegar até ele", eng: "to reach him" },
    "caminhando": { type: "verbo", def: "Andando a pé", eng: "walking" },
    "pegou": { type: "verbo", def: "Agarrou", eng: "took" },
    "sofrerá": { type: "verbo", def: "Padecerá", eng: "will suffer" },
    "parou": { type: "verbo", def: "Interrompeu movimento", eng: "stopped" },
    "tombou": { type: "verbo", def: "Caiu", eng: "fell" },
    "caindo": { type: "verbo", def: "A cair", eng: "falling" },
    "chegou": { type: "verbo", def: "Alcançou destino", eng: "reached" },
    "passaram": { type: "verbo", def: "Transcorreram", eng: "passed" },
    "contei": { type: "verbo", def: "Narrei", eng: "told" },
    "voltou": { type: "verbo", def: "Regressou", eng: "returned" },
    "amanheceu": { type: "verbo", def: "Raiou o dia", eng: "dawned" },
    "adoro": { type: "verbo", def: "Amo muito", eng: "adore" },
    "ouvir": { type: "verbo", def: "Perceber sons", eng: "to hear" },
    "acrescentar": { type: "verbo", def: "Adicionar", eng: "to add" },
    "prendê-la": { type: "verbo", def: "Fixá-la", eng: "to fasten it" },
    "fico": { type: "verbo", def: "Permaneço", eng: "stay" },
    "perguntando": { type: "verbo", def: "Fazendo perguntas", eng: "wondering" },
    "estará": { type: "verbo", def: "Estará", eng: "will be" },
    "comido": { type: "verbo", def: "Ingerido", eng: "eaten" },
    "protege": { type: "verbo", def: "Defende", eng: "protects" },
    "cuida": { type: "verbo", def: "Zela", eng: "takes care" },
    "alegro": { type: "verbo", def: "Fico alegre", eng: "rejoice" },
    "distrair": { type: "verbo", def: "Desviar atenção", eng: "to distract" },
    "esquecer": { type: "verbo", def: "Não lembrar", eng: "to forget" },
    "mudam": { type: "verbo", def: "Alteram-se", eng: "change" },
    "naufragar": { type: "verbo", def: "Afundar em naufrágio", eng: "to shipwreck" },
    "entenderá": { type: "verbo", def: "Compreenderá", eng: "will understand" },
    "coloquei-a": { type: "verbo", def: "Pus-la", eng: "put it" },
    "imprimi-la": { type: "verbo", def: "Gravá-la", eng: "to imprint it" },
    "reconhecê-la": { type: "verbo", def: "Identificá-la", eng: "to recognize it" },
    "cair": { type: "verbo", def: "Ir ao chão", eng: "to fall" },
    "apresse": { type: "verbo", def: "Faça depressa", eng: "hurry" },
    "recusa": { type: "verbo", def: "Nega", eng: "refuses" },
    "responder": { type: "verbo", def: "Dar resposta", eng: "to answer" },
    "saberá": { type: "verbo", def: "Terá conhecimento", eng: "will know" },
    "acontecer": { type: "verbo", def: "Ocorrer", eng: "to happen" },
    "conforte-me": { type: "verbo", def: "Console-me", eng: "comfort me" },
    "conte-me": { type: "verbo", def: "Narre-me", eng: "tell me" },

    // --- ADJETIVOS ---
    "magnífica": { type: "adjetivo", def: "Muito bonita, esplêndida", eng: "magnificent" },
    "verdadeiras": { type: "adjetivo", def: "Reais, autênticas", eng: "true" },
    "primitiva": { type: "adjetivo", def: "Antiga, original", eng: "primitive" },
    "primitivas": { type: "adjetivo", def: "Plural de primitiva", eng: "primitive" },
    "inteira": { type: "adjetivo", def: "Completa, toda", eng: "whole" },
    "primeiro": { type: "adjetivo", def: "Que vem antes de todos", eng: "first" },
    "primeira": { type: "adjetivo", def: "Que vem antes de todos", eng: "first" },
    "capazes": { type: "adjetivo", def: "Que têm capacidade", eng: "capable" },
    "capaz": { type: "adjetivo", def: "Que tem capacidade", eng: "capable" },
    "grandes": { type: "adjetivo", def: "De tamanho avantajado", eng: "big/grown-ups" },
    "grande": { type: "adjetivo", def: "De tamanho avantajado", eng: "great/big" },
    "cansativo": { type: "adjetivo", def: "Que causa cansaço", eng: "tiring" },
    "útil": { type: "adjetivo", def: "Que serve, proveitoso", eng: "useful" },
    "valioso": { type: "adjetivo", def: "De grande valor", eng: "valuable" },
    "séria": { type: "adjetivo", def: "Grave, importante", eng: "serious" },
    "sérios": { type: "adjetivo", def: "Graves, importantes", eng: "serious" },
    "lúcido": { type: "adjetivo", def: "Claro, consciente", eng: "lucid" },
    "verdadeira": { type: "adjetivo", def: "Autêntica, real", eng: "true" },
    "sozinho": { type: "adjetivo", def: "Sem companhia, solitário", eng: "alone" },
    "sozinhas": { type: "adjetivo", def: "Sem ajuda", eng: "alone" },
    "difíceis": { type: "adjetivo", def: "Complicados, árduos", eng: "difficult" },
    "difícil": { type: "adjetivo", def: "Complicado, árduo", eng: "difficult" },
    "potável": { type: "adjetivo", def: "Própria para beber", eng: "drinkable" },
    "humana": { type: "adjetivo", def: "Relativo aos humanos", eng: "human" },
    "isolado": { type: "adjetivo", def: "Separado, sozinho", eng: "isolated" },
    "engraçada": { type: "adjetivo", def: "Divertida, cômica", eng: "funny" },
    "engraçado": { type: "adjetivo", def: "Divertido, curioso", eng: "funny" },
    "atordoado": { type: "adjetivo", def: "Confuso, desorientado", eng: "dazed" },
    "extraordinário": { type: "adjetivo", def: "Fora do comum, notável", eng: "extraordinary" },
    "melhor": { type: "adjetivo", def: "Superior em qualidade", eng: "best" },
    "encantador": { type: "adjetivo", def: "Que encanta, fascinante", eng: "charming" },
    "súbita": { type: "adjetivo", def: "Repentina, inesperada", eng: "sudden" },
    "arregalados": { type: "adjetivo", def: "Muito abertos", eng: "wide open" },
    "habitada": { type: "adjetivo", def: "Onde se habita", eng: "inhabited" },
    "exausto": { type: "adjetivo", def: "Muito cansado", eng: "exhausted" },
    "perdida": { type: "adjetivo", def: "Que se perdeu", eng: "lost" },
    "poderoso": { type: "adjetivo", def: "Com grande poder", eng: "powerful" },
    "absurdo": { type: "adjetivo", def: "Sem lógica, ilógico", eng: "absurd" },
    "irritado": { type: "adjetivo", def: "Com raiva, aborrecido", eng: "irritated" },
    "duas": { type: "adjetivo", def: "Número 2", eng: "two" },
    "espantado": { type: "adjetivo", def: "Surpreso", eng: "astonished" },
    "pequeno": { type: "adjetivo", def: "De tamanho reduzido", eng: "small" },
    "pequenos": { type: "adjetivo", def: "De tamanho reduzido", eng: "small" },
    "pequena": { type: "adjetivo", def: "De tamanho reduzido", eng: "small" },
    "perigosa": { type: "adjetivo", def: "Que oferece perigo", eng: "dangerous" },
    "pesado": { type: "adjetivo", def: "Com muito peso", eng: "heavy" },
    "doente": { type: "adjetivo", def: "Com doença, enfermo", eng: "sick" },
    "velho": { type: "adjetivo", def: "De idade avançada", eng: "old" },
    "longo": { type: "adjetivo", def: "Com grande extensão", eng: "long" },
    "ansioso": { type: "adjetivo", def: "Com ansiedade", eng: "anxious" },
    "surpreso": { type: "adjetivo", def: "Com surpresa", eng: "surprised" },
    "suficiente": { type: "adjetivo", def: "Bastante, adequado", eng: "enough" },
    "complicado": { type: "adjetivo", def: "Difícil, complexo", eng: "complicated" },
    "bela": { type: "adjetivo", def: "Bonita, formosa", eng: "beautiful" },
    "pensativo": { type: "adjetivo", def: "Meditativo, reflexivo", eng: "thoughtful" },
    "bom": { type: "adjetivo", def: "De boa índole", eng: "good" },
    "estranha": { type: "adjetivo", def: "Anormal, esquisita", eng: "strange" },
    "chocado": { type: "adjetivo", def: "Surpreso, horrorizado", eng: "shocked" },
    "segundo": { type: "adjetivo", def: "Que vem depois do primeiro", eng: "second" },
    "maior": { type: "adjetivo", def: "De tamanho superior", eng: "bigger/greater" },
    "turco": { type: "adjetivo", def: "Da Turquia", eng: "Turkish" },
    "turcos": { type: "adjetivo", def: "Da Turquia", eng: "Turkish" },
    "internacional": { type: "adjetivo", def: "Entre nações", eng: "international" },
    "europeu": { type: "adjetivo", def: "Da Europa", eng: "European" },
    "nova": { type: "adjetivo", def: "Recente, diferente", eng: "new" },
    "novo": { type: "adjetivo", def: "Recente, diferente", eng: "new" },
    "impressionante": { type: "adjetivo", def: "Que impressiona", eng: "impressive" },
    "essenciais": { type: "adjetivo", def: "Fundamentais, importantes", eng: "essential" },
    "rosados": { type: "adjetivo", def: "De cor rosa", eng: "pink" },
    "mesma": { type: "adjetivo", def: "Igual, idêntica", eng: "same" },
    "crescidas": { type: "adjetivo", def: "Adultas", eng: "grown-ups" },
    "triste": { type: "adjetivo", def: "Melancólico, infeliz", eng: "sad" },
    "impenetrável": { type: "adjetivo", def: "Que não se pode penetrar", eng: "impenetrable" },
    "indulgentes": { type: "adjetivo", def: "Tolerantes, compreensivos", eng: "indulgent" },
    "irrelevantes": { type: "adjetivo", def: "Sem importância", eng: "irrelevant" },
    "descuidadamente": { type: "advérbio", def: "Sem cuidado", eng: "carelessly" },
    "medianamente": { type: "advérbio", def: "De modo mediano", eng: "moderately" },
    "hesitante": { type: "adjetivo", def: "Indeciso, inseguro", eng: "hesitant" },
    "realistas": { type: "adjetivo", def: "Próximos da realidade", eng: "realistic" },
    "possível": { type: "adjetivo", def: "Que se pode fazer", eng: "possible" },
    "importantes": { type: "adjetivo", def: "Relevantes, significativos", eng: "important" },
    "certos": { type: "pronome", def: "Alguns, determinados", eng: "certain" },
    "alto": { type: "adjetivo", def: "De grande altura", eng: "tall" },
    "baixo": { type: "adjetivo", def: "De pouca altura", eng: "short" },
    // --- ADJETIVOS (continuação) ---

"inofensivamente": { type: "adjetivo", def: "Sem causar dano", eng: "harmlessly" },
"timidamente": { type: "adjetivo", def: "Com timidez", eng: "timidly" },
"terríveis": { type: "adjetivo", def: "Que causam terror", eng: "terrible" },
"regularmente": { type: "adjetivo", def: "De forma regular", eng: "regularly" },
"tedioso": { type: "adjetivo", def: "Entediante, monótono", eng: "tedious" },
"fácil": { type: "adjetivo", def: "Simples, sem dificuldade", eng: "easy" },
"pouco": { type: "adjetivo", def: "Em pequena quantidade", eng: "little" },
"conhecido": { type: "adjetivo", def: "Sabido, reconhecido", eng: "known" },
"considerável": { type: "adjetivo", def: "Grande, significativo", eng: "considerable" },
"primeira": { type: "adjetivo", def: "Que vem antes de todos", eng: "first" },
"grandiosos": { type: "adjetivo", def: "Magníficos, imponentes", eng: "grandiose" },
"animado": { type: "adjetivo", def: "Com ânimo, entusiasmo", eng: "excited" },
"longo": { type: "adjetivo", def: "Com grande extensão", eng: "long" },
"triste": { type: "adjetivo", def: "Melancólico, infeliz", eng: "sad" },
"único": { type: "adjetivo", def: "Só um, singular", eng: "only" },
"tranquilo": { type: "adjetivo", def: "Calmo, sereno", eng: "quiet" },
"quarto": { type: "adjetivo", def: "Número 4 em ordem", eng: "fourth" },
"surpreso": { type: "adjetivo", def: "Com surpresa", eng: "surprised" },
"quarenta": { type: "adjetivo", def: "Número 40", eng: "forty" },
"quinto": { type: "adjetivo", def: "Número 5 em ordem", eng: "fifth" },
"abruptamente": { type: "adjetivo", def: "De forma abrupta", eng: "abruptly" },
"silenciosa": { type: "adjetivo", def: "Sem som", eng: "silent" },
"enorme": { type: "adjetivo", def: "Muito grande", eng: "enormous" },
"milagrosa": { type: "adjetivo", def: "Maravilhosa", eng: "miraculous" },
"primeiro": { type: "adjetivo", def: "Que vem antes de todos", eng: "first" },
"cuidado": { type: "adjetivo", def: "Atenção, cautela", eng: "care" },
"lentamente": { type: "adjetivo", def: "De forma lenta", eng: "slowly" },
"amarrotadas": { type: "adjetivo", def: "Amassadas", eng: "wrinkled" },
"pleno": { type: "adjetivo", def: "Completo, total", eng: "full" },
"coquete": { type: "adjetivo", def: "Vaidosa, sedutora", eng: "coquettish" },
"misterioso": { type: "adjetivo", def: "Enigmático", eng: "mysterious" },
"exatamente": { type: "adjetivo", def: "Precisamente", eng: "exactly" },
"despenteadas": { type: "adjetivo", def: "Não penteadas", eng: "disheveled" },
"envergonhado": { type: "adjetivo", def: "Com vergonha", eng: "embarrassed" },
"doce": { type: "adjetivo", def: "Agradável, suave", eng: "sweet" },
"rapidamente": { type: "adjetivo", def: "De forma rápida", eng: "quickly" },
"quatro": { type: "adjetivo", def: "Número 4", eng: "four" },
"má": { type: "adjetivo", def: "Ruim, de má qualidade", eng: "bad" },
"complicada": { type: "adjetivo", def: "Difícil, complexa", eng: "complicated" },
"frio": { type: "adjetivo", def: "Com baixa temperatura", eng: "cold" },
"ingênua": { type: "adjetivo", def: "Inocente", eng: "naive" },
"boa": { type: "adjetivo", def: "De boa qualidade", eng: "good" },
"aliada": { type: "adjetivo", def: "Unida, ligada", eng: "allied" },
"infeliz": { type: "adjetivo", def: "Sem felicidade", eng: "unhappy" },
"toda": { type: "adjetivo", def: "Inteira, completa", eng: "all" },
"pobres": { type: "adjetivo", def: "Sem recursos", eng: "poor" },
"inconstantes": { type: "adjetivo", def: "Instáveis, variáveis", eng: "inconstant" },
"jovem": { type: "adjetivo", def: "De pouca idade", eng: "young" },
"selvagens": { type: "adjetivo", def: "Não domesticadas", eng: "wild" },
"perfeita": { type: "adjetivo", def: "Sem defeitos", eng: "perfect" },
"ativos": { type: "adjetivo", def: "Em funcionamento", eng: "active" },
"convenientes": { type: "adjetivo", def: "Adequados", eng: "convenient" },
"extinto": { type: "adjetivo", def: "Que se extinguiu", eng: "extinct" },
"limpos": { type: "adjetivo", def: "Sem sujeira", eng: "clean" },
"constante": { type: "adjetivo", def: "Permanente, contínua", eng: "steady" },
"pequenos": { type: "adjetivo", def: "De tamanho reduzido", eng: "small" },
"obviamente": { type: "adjetivo", def: "De forma óbvia", eng: "obviously" },
"certa": { type: "adjetivo", def: "Determinada, alguma", eng: "certain" },
"última": { type: "adjetivo", def: "Final, derradeira", eng: "last" },
"últimos": { type: "adjetivo", def: "Finais, derradeiros", eng: "last" },
"familiares": { type: "adjetivo", def: "Conhecidos, habituais", eng: "familiar" },
"preciosas": { type: "adjetivo", def: "De grande valor", eng: "precious" },
"último": { type: "adjetivo", def: "Final, derradeiro", eng: "last" },
"perplexo": { type: "adjetivo", def: "Confuso, admirado", eng: "perplexed" },
"ingenuamente": { type: "adjetivo", def: "De forma ingênua", eng: "naively" },
"orgulhosa": { type: "adjetivo", def: "Com orgulho", eng: "proud" },
"simples": { type: "adjetivo", def: "Sem complicação", eng: "simple" },
"majestoso": { type: "adjetivo", def: "Imponente, nobre", eng: "majestic" },
"finalmente": { type: "adjetivo", def: "Por fim, enfim", eng: "finally" },
"magnífico": { type: "adjetivo", def: "Esplêndido, grandioso", eng: "magnificent" },
"muito": { type: "adjetivo", def: "Em grande quantidade", eng: "very" },
"cansado": { type: "adjetivo", def: "Fatigado", eng: "tired" },
"contra": { type: "adjetivo", def: "Em oposição a", eng: "against" },
"timidamente": { type: "adjetivo", def: "Com timidez", eng: "timidly" },
"razoáveis": { type: "adjetivo", def: "Com razão", eng: "reasonable" },
"absoluto": { type: "adjetivo", def: "Total, completo", eng: "absolute" },
"muito": { type: "adjetivo", def: "Em grande quantidade", eng: "very" },
"razoável": { type: "adjetivo", def: "Com razão", eng: "reasonable" },
"verdadeira": { type: "adjetivo", def: "Autêntica, real", eng: "true" },
"universal": { type: "adjetivo", def: "De todos, geral", eng: "universal" },
"completa": { type: "adjetivo", def: "Total, inteira", eng: "complete" },
"setenta": { type: "adjetivo", def: "Número 70", eng: "seventy" },
"duzentas": { type: "adjetivo", def: "Número 200", eng: "two hundred" },
"abandonado": { type: "adjetivo", def: "Deixado", eng: "abandoned" },
"favoráveis": { type: "adjetivo", def: "Propícias", eng: "favorable" },
"prontamente": { type: "adjetivo", def: "De forma pronta", eng: "promptly" },
"razoável": { type: "adjetivo", def: "Com razão", eng: "reasonable" },
"às pressas": { type: "adjetivo", def: "Com pressa", eng: "hastily" },
"muito": { type: "adjetivo", def: "Em grande quantidade", eng: "very" },
"modesta": { type: "adjetivo", def: "Com modéstia", eng: "modest" },
"divertido": { type: "adjetivo", def: "Engraçado", eng: "fun" },
"curta": { type: "adjetivo", def: "De pouca duração", eng: "short" },
"profundo": { type: "adjetivo", def: "Muito fundo", eng: "deep" },
"lúgubre": { type: "adjetivo", def: "Triste, sombrio", eng: "gloomy" },
"baixa": { type: "adjetivo", def: "De pouca altura", eng: "low" },
"inexpugnável": { type: "adjetivo", def: "Invencível", eng: "impregnable" },
"quarto": { type: "adjetivo", def: "Número 4 em ordem", eng: "fourth" },
"ocupado": { type: "adjetivo", def: "Atarefado", eng: "busy" },
"três": { type: "adjetivo", def: "Número 3", eng: "three" },
"cinquenta-quatro": { type: "adjetivo", def: "Número 54", eng: "fifty-four" },
"vinte-dois": { type: "adjetivo", def: "Número 22", eng: "twenty-two" },
"vertiginoso": { type: "adjetivo", def: "Que causa vertigem", eng: "vertiginous" },
"terrível": { type: "adjetivo", def: "Que causa terror", eng: "terrible" },
"onze": { type: "adjetivo", def: "Número 11", eng: "eleven" },
"terceira": { type: "adjetivo", def: "Número 3 em ordem", eng: "third" },
"pequenas": { type: "adjetivo", def: "De tamanho reduzido", eng: "small" },
"dourados": { type: "adjetivo", def: "Da cor do ouro", eng: "golden" },
"preguiçosos": { type: "adjetivo", def: "Sem energia", eng: "lazy" },
"sério": { type: "adjetivo", def: "Grave, importante", eng: "serious" },
"preciso": { type: "adjetivo", def: "Exato, correto", eng: "precise" },
"rico": { type: "adjetivo", def: "Com muita riqueza", eng: "rich" },
"naturalmente": { type: "adjetivo", def: "De forma natural", eng: "naturally" },
"satisfeito": { type: "adjetivo", def: "Contente", eng: "satisfied" },
"poético": { type: "adjetivo", def: "Com poesia", eng: "poetic" },
"útil": { type: "adjetivo", def: "Que serve", eng: "useful" },
"diferentes": { type: "adjetivo", def: "Distintos, diversos", eng: "different" },
"extraordinários": { type: "adjetivo", def: "Fora do comum", eng: "extraordinary" },
"simplesmente": { type: "adjetivo", def: "De forma simples", eng: "simply" },
"estranho": { type: "adjetivo", def: "Anormal, esquisito", eng: "strange" },
"menor": { type: "adjetivo", def: "De tamanho inferior", eng: "smallest" },
"suficiente": { type: "adjetivo", def: "Bastante", eng: "enough" },
"qualquer": { type: "adjetivo", def: "Seja qual for", eng: "any" },
"capaz": { type: "adjetivo", def: "Com capacidade", eng: "capable" },
"bonita": { type: "adjetivo", def: "Bela, formosa", eng: "beautiful" },
"verdadeiramente": { type: "adjetivo", def: "De verdade", eng: "truly" },
"respeitosamente": { type: "adjetivo", def: "Com respeito", eng: "respectfully" },
"razoável": { type: "adjetivo", def: "Com razão", eng: "reasonable" },
"alteradas": { type: "adjetivo", def: "Mudadas", eng: "changed" },
"rápido": { type: "adjetivo", def: "Veloz", eng: "fast" },
"engraçado": { type: "adjetivo", def: "Divertido", eng: "funny" },
"fiel": { type: "adjetivo", def: "Leal, dedicado", eng: "faithful" },
"preguiçoso": { type: "adjetivo", def: "Sem energia", eng: "lazy" },
"lentamente": { type: "adjetivo", def: "De forma lenta", eng: "slowly" },
"azarado": { type: "adjetivo", def: "Sem sorte", eng: "unlucky" },
"desprezado": { type: "adjetivo", def: "Rejeitado", eng: "despised" },
"ridículo": { type: "adjetivo", def: "Absurdo, risível", eng: "ridiculous" },
"arrependido": { type: "adjetivo", def: "Com arrependimento", eng: "regretful" },
"abençoado": { type: "adjetivo", def: "Com bênção", eng: "blessed" },
"sexto": { type: "adjetivo", def: "Número 6 em ordem", eng: "sixth" },
"dez": { type: "adjetivo", def: "Número 10", eng: "ten" },
"volumoso": { type: "adjetivo", def: "De grande volume", eng: "voluminous" },
"ancião": { type: "adjetivo", def: "Idoso", eng: "old" },
"ofegante": { type: "adjetivo", def: "Sem fôlego", eng: "breathless" },
"interessante": { type: "adjetivo", def: "Que desperta interesse", eng: "interesting" },
"imponente": { type: "adjetivo", def: "Impressionante", eng: "imposing" },
"importante": { type: "adjetivo", def: "Relevante", eng: "important" },
"magnífica": { type: "adjetivo", def: "Esplêndida", eng: "magnificent" },
"simplicidade": { type: "adjetivo", def: "Qualidade de simples", eng: "simplicity" },
"razoáveis": { type: "adjetivo", def: "Com razão", eng: "reasonable" },
"moral": { type: "adjetivo", def: "Relativo aos costumes", eng: "moral" },
"embriagados": { type: "adjetivo", def: "Bêbados", eng: "intoxicated" },
"grande": { type: "adjetivo", def: "De tamanho avantajado", eng: "great" },
"antigas": { type: "adjetivo", def: "De tempos remotos", eng: "ancient" },
"permanentes": { type: "adjetivo", def: "Duradouros", eng: "permanent" },
"extintos": { type: "adjetivo", def: "Que se extinguiram", eng: "extinct" },
"efêmera": { type: "adjetivo", def: "Passageira", eng: "ephemeral" },
"sétimo": { type: "adjetivo", def: "Número 7 em ordem", eng: "seventh" },
"comum": { type: "adjetivo", def: "Ordinário, normal", eng: "common" },
"cento": { type: "adjetivo", def: "Número 100", eng: "hundred" },
"africanos": { type: "adjetivo", def: "Da África", eng: "African" },
"verdadeiro": { type: "adjetivo", def: "Real, autêntico", eng: "true" },
"seis": { type: "adjetivo", def: "Número 6", eng: "six" },
"regulados": { type: "adjetivo", def: "Controlados", eng: "regulated" },
"magnífico": { type: "adjetivo", def: "Esplêndido", eng: "magnificent" },
"única": { type: "adjetivo", def: "Só uma", eng: "single" },
"livre": { type: "adjetivo", def: "Sem amarras", eng: "free" },
"dois": { type: "adjetivo", def: "Número 2", eng: "two" },
"espirituoso": { type: "adjetivo", def: "Engraçado", eng: "witty" },
"honesto": { type: "adjetivo", def: "Sincero", eng: "honest" },
"falsa": { type: "adjetivo", def: "Não verdadeira", eng: "false" },
"juntos": { type: "adjetivo", def: "Unidos", eng: "together" },
"pública": { type: "adjetivo", def: "Do público", eng: "public" },
"facilmente": { type: "adjetivo", def: "Com facilidade", eng: "easily" },
"vinte": { type: "adjetivo", def: "Número 20", eng: "twenty" },
"pequena": { type: "adjetivo", def: "De tamanho reduzido", eng: "small" },
"desnecessária": { type: "adjetivo", def: "Não necessária", eng: "unnecessary" },
"retorcida": { type: "adjetivo", def: "Torcida, enrolada", eng: "twisted" },
"solitário": { type: "adjetivo", def: "Sozinho, isolado", eng: "lonely" },
"finalmente": { type: "adjetivo", def: "Por fim", eng: "finally" },
"espesso": { type: "adjetivo", def: "Grosso, denso", eng: "thick" },
"poderosa": { type: "adjetivo", def: "Com grande poder", eng: "powerful" },
"inocente": { type: "adjetivo", def: "Sem culpa", eng: "innocent" },
"verdadeiro": { type: "adjetivo", def: "Real, autêntico", eng: "true" },
"fraco": { type: "adjetivo", def: "Sem força", eng: "weak" },
"dura": { type: "adjetivo", def: "Rígida, firme", eng: "hard" },
"próprio": { type: "adjetivo", def: "Seu, particular", eng: "own" },
"educadamente": { type: "adjetivo", def: "Com educação", eng: "politely" },
"três": { type: "adjetivo", def: "Número 3", eng: "three" },
"seis": { type: "adjetivo", def: "Número 6", eng: "six" },
"sete": { type: "adjetivo", def: "Número 7", eng: "seven" },
"difícil": { type: "adjetivo", def: "Complicada", eng: "difficult" },
"alta": { type: "adjetivo", def: "De grande altura", eng: "tall" },
"três": { type: "adjetivo", def: "Número 3", eng: "three" },
"únicas": { type: "adjetivo", def: "As únicas", eng: "only" },
"rochosos": { type: "adjetivo", def: "De rocha", eng: "rocky" },
"afiados": { type: "adjetivo", def: "Pontiagudos", eng: "sharp" },
"seco": { type: "adjetivo", def: "Sem água", eng: "dry" },
"completamente": { type: "adjetivo", def: "Totalmente", eng: "completely" },
"pontiagudo": { type: "adjetivo", def: "Com ponta", eng: "pointy" },
"severo": { type: "adjetivo", def: "Rígido, austero", eng: "severe" },
"proibitivo": { type: "adjetivo", def: "Que proíbe", eng: "forbidding" },
"estranho": { type: "adjetivo", def: "Anormal, esquisito", eng: "strange" },
"cinco": { type: "adjetivo", def: "Número 5", eng: "five" },
"mil": { type: "adjetivo", def: "Número 1000", eng: "thousand" },
"única": { type: "adjetivo", def: "Só uma", eng: "single" },
"iguais": { type: "adjetivo", def: "Semelhantes", eng: "equal" },
"aborrecida": { type: "adjetivo", def: "Chateada", eng: "upset" },
"terrivelmente": { type: "adjetivo", def: "De forma terrível", eng: "terribly" },
"obrigado": { type: "adjetivo", def: "Forçado", eng: "obliged" },
"única": { type: "adjetivo", def: "Só uma", eng: "unique" },
"rica": { type: "adjetivo", def: "Com muita riqueza", eng: "rich" },
"comum": { type: "adjetivo", def: "Ordinária", eng: "common" },
"três": { type: "adjetivo", def: "Número 3", eng: "three" },
"completamente": { type: "adjetivo", def: "Totalmente", eng: "completely" },
"bonita": { type: "adjetivo", def: "Bela", eng: "beautiful" },
"educadamente": { type: "adjetivo", def: "Com educação", eng: "politely" },
"esquecida": { type: "adjetivo", def: "Não lembrada", eng: "forgotten" },
"ingênua": { type: "adjetivo", def: "Inocente", eng: "naive" },
"perturbador": { type: "adjetivo", def: "Que perturba", eng: "disturbing" },
"únicos": { type: "adjetivo", def: "Os únicos", eng: "only" },
"perplexa": { type: "adjetivo", def: "Confusa", eng: "perplexed" },
"curiosa": { type: "adjetivo", def: "Com curiosidade", eng: "curious" },
"interessante": { type: "adjetivo", def: "Que desperta interesse", eng: "interesting" },
"perfeito": { type: "adjetivo", def: "Sem defeitos", eng: "perfect" },
"monótona": { type: "adjetivo", def: "Sem variação", eng: "monotonous" },
"entediada": { type: "adjetivo", def: "Com tédio", eng: "bored" },
"diferentes": { type: "adjetivo", def: "Distintos", eng: "different" },
"maravilhoso": { type: "adjetivo", def: "Espantoso", eng: "wonderful" },
"pronto": { type: "adjetivo", def: "Preparado", eng: "ready" },
"paciente": { type: "adjetivo", def: "Que tem paciência", eng: "patient" },
"longe": { type: "adjetivo", def: "A grande distância", eng: "far" },
"contente": { type: "adjetivo", def: "Alegre", eng: "happy" },
"feliz": { type: "adjetivo", def: "Com felicidade", eng: "happy" },
"preocupada": { type: "adjetivo", def: "Com preocupação", eng: "worried" },
"adequados": { type: "adjetivo", def: "Apropriados", eng: "adequate" },
"maravilhoso": { type: "adjetivo", def: "Espantoso", eng: "wonderful" },
"idênticos": { type: "adjetivo", def: "Iguais", eng: "identical" },
"própria": { type: "adjetivo", def: "Sua, particular", eng: "own" },
"único": { type: "adjetivo", def: "Só um", eng: "unique" },
"cem": { type: "adjetivo", def: "Número 100", eng: "hundred" },
"envergonhadas": { type: "adjetivo", def: "Com vergonha", eng: "ashamed" },
"bonitas": { type: "adjetivo", def: "Belas", eng: "beautiful" },
"vazias": { type: "adjetivo", def: "Sem conteúdo", eng: "empty" },
"única": { type: "adjetivo", def: "Só uma", eng: "unique" },
"importante": { type: "adjetivo", def: "Relevante", eng: "important" },
"centenas": { type: "adjetivo", def: "Muitas centenas", eng: "hundreds" },
"simples": { type: "adjetivo", def: "Sem complicação", eng: "simple" },
"invisível": { type: "adjetivo", def: "Que não se vê", eng: "invisible" },
"eternamente": { type: "adjetivo", def: "Para sempre", eng: "eternally" },
"responsável": { type: "adjetivo", def: "Encarregado", eng: "responsible" },
"brilhantemente": { type: "adjetivo", def: "Com brilho", eng: "brilliantly" },
"iluminado": { type: "adjetivo", def: "Com luz", eng: "illuminated" },
"oposta": { type: "adjetivo", def: "Contrária", eng: "opposite" },
"satisfeitos": { type: "adjetivo", def: "Contentes", eng: "satisfied" },
"terceiro": { type: "adjetivo", def: "Número 3 em ordem", eng: "third" },
"primeiros": { type: "adjetivo", def: "Os primeiros", eng: "first" },
"sorridentes": { type: "adjetivo", def: "Que sorriem", eng: "smiling" },
"charmosas": { type: "adjetivo", def: "Encantadoras", eng: "charming" },
"enorme": { type: "adjetivo", def: "Muito grande", eng: "enormous" },
"prazerosamente": { type: "adjetivo", def: "Com prazer", eng: "pleasantly" },
"fresca": { type: "adjetivo", def: "Fria, refrigerada", eng: "fresh" },
"oitavo": { type: "adjetivo", def: "Número 8 em ordem", eng: "eighth" },
"última": { type: "adjetivo", def: "Final, derradeira", eng: "last" },
"caro": { type: "adjetivo", def: "Estimado", eng: "dear" },
"absurdo": { type: "adjetivo", def: "Sem lógica", eng: "absurd" },
"aleatória": { type: "adjetivo", def: "Ao acaso", eng: "random" },
"várias": { type: "adjetivo", def: "Diversas", eng: "several" },
"febril": { type: "adjetivo", def: "Com febre", eng: "feverish" },
"últimas": { type: "adjetivo", def: "Finais", eng: "last" },
"impossível": { type: "adjetivo", def: "Que não pode ser", eng: "impossible" },
"pálida": { type: "adjetivo", def: "Sem cor", eng: "pale" },
"fechados": { type: "adjetivo", def: "Não abertos", eng: "closed" },
"frágil": { type: "adjetivo", def: "Delicado", eng: "fragile" },
"invisível": { type: "adjetivo", def: "Que não se vê", eng: "invisible" },
"pequeno": { type: "adjetivo", def: "De tamanho reduzido", eng: "little" },
"profundamente": { type: "adjetivo", def: "Muito", eng: "deeply" },
"toda": { type: "adjetivo", def: "Inteira", eng: "all" },
"extinta": { type: "adjetivo", def: "Apagada", eng: "extinguished" },
"pequena": { type: "adjetivo", def: "De tamanho reduzido", eng: "small" },
"estranho": { type: "adjetivo", def: "Anormal", eng: "strange" },
"pronto": { type: "adjetivo", def: "Preparado", eng: "ready" },
"velho": { type: "adjetivo", def: "Antigo", eng: "old" },
"bom": { type: "adjetivo", def: "De boa qualidade", eng: "good" },
"contente": { type: "adjetivo", def: "Alegre", eng: "happy" },
"dourado": { type: "adjetivo", def: "Da cor do ouro", eng: "golden" },
"doce": { type: "adjetivo", def: "Saboroso", eng: "sweet" },
"bom": { type: "adjetivo", def: "De boa qualidade", eng: "good" },
"pequeno": { type: "adjetivo", def: "De tamanho reduzido", eng: "small" },
"grande": { type: "adjetivo", def: "De tamanho avantajado", eng: "great" },
"verdadeiro": { type: "adjetivo", def: "Real, autêntico", eng: "true" },
"quinhentos": { type: "adjetivo", def: "Número 500", eng: "five hundred" },
"baixinho": { type: "adjetivo", def: "Em voz baixa", eng: "softly" },
"justo": { type: "adjetivo", def: "Correto", eng: "fair" },
"compridas": { type: "adjetivo", def: "Longas", eng: "long" },
"exato": { type: "adjetivo", def: "Preciso", eng: "exact" },
"certo": { type: "adjetivo", def: "Correto", eng: "right" },
"dilacerado": { type: "adjetivo", def: "Partido", eng: "torn" },
"amarelas": { type: "adjetivo", def: "Da cor amarela", eng: "yellow" },
"trinta": { type: "adjetivo", def: "Número 30", eng: "thirty" },
"branco": { type: "adjetivo", def: "Cor clara", eng: "white" },
"dourado": { type: "adjetivo", def: "Da cor do ouro", eng: "golden" },
"gravemente": { type: "adjetivo", def: "Seriamente", eng: "gravely" },
"extraordinário": { type: "adjetivo", def: "Fora do comum", eng: "extraordinary" },
"grave": { type: "adjetivo", def: "Sério", eng: "grave" },
"melancolicamente": { type: "adjetivo", def: "Com melancolia", eng: "melancholically" },
"congelado": { type: "adjetivo", def: "Gelado", eng: "frozen" },
"irreparável": { type: "adjetivo", def: "Que não se repara", eng: "irreparable" },
"doce": { type: "adjetivo", def: "Agradável", eng: "sweet" },
"pequenas": { type: "adjetivo", def: "De tamanho reduzido", eng: "small" },
"puro": { type: "adjetivo", def: "Simples", eng: "pure" },
"surpresos": { type: "adjetivo", def: "Admirados", eng: "surprised" },
"louco": { type: "adjetivo", def: "Sem juízo", eng: "crazy" },
"pobre": { type: "adjetivo", def: "De baixa qualidade", eng: "poor" },
"maliciosas": { type: "adjetivo", def: "Maldosas", eng: "malicious" },
"segunda": { type: "adjetivo", def: "Número 2 em ordem", eng: "second" },
"rápido": { type: "adjetivo", def: "Veloz", eng: "fast" },
"decidido": { type: "adjetivo", def: "Determinado", eng: "determined" },
"pesado": { type: "adjetivo", def: "Com muito peso", eng: "heavy" },
"abandonada": { type: "adjetivo", def: "Deixada", eng: "abandoned" },
"velhas": { type: "adjetivo", def: "Antigas", eng: "old" },
"desanimado": { type: "adjetivo", def: "Sem ânimo", eng: "discouraged" },
"enferrujada": { type: "adjetivo", def: "Com ferrugem", eng: "rusty" },
"divertido": { type: "adjetivo", def: "Engraçado", eng: "fun" },
"frágil": { type: "adjetivo", def: "Delicada", eng: "fragile" },
"ingênua": { type: "adjetivo", def: "Inocente", eng: "naive" },
"inúteis": { type: "adjetivo", def: "Sem utilidade", eng: "useless" },
"inteiro": { type: "adjetivo", def: "Todo, completo", eng: "whole" },
"capaz": { type: "adjetivo", def: "Com capacidade", eng: "able" },
"amarelo": { type: "adjetivo", def: "Cor do ouro", eng: "yellow" },
"suavemente": { type: "adjetivo", def: "De forma suave", eng: "gently" },
"vivo": { type: "adjetivo", def: "Com vida", eng: "alive" },
"consolada": { type: "adjetivo", def: "Confortada", eng: "consoled" },
"totalmente": { type: "adjetivo", def: "Completamente", eng: "totally" },
"bela": { type: "adjetivo", def: "Bonita", eng: "beautiful" },
"triste": { type: "adjetivo", def: "Melancólica", eng: "sad" },
"anterior": { type: "adjetivo", def: "Que vem antes", eng: "previous" },
"africano": { type: "adjetivo", def: "Da África", eng: "African" },
"risonho": { type: "adjetivo", def: "Que ri", eng: "laughing" },
"dourados": { type: "adjetivo", def: "Da cor do ouro", eng: "golden" },
"extraordinária": { type: "adjetivo", def: "Fora do comum", eng: "extraordinary" },

    // --- PREPOSIÇÕES ---
    "em": { type: "preposicao", def: "Indica localização/tempo", eng: "in/on" },
    "de": { type: "preposicao", def: "Indica posse/origem/relação", eng: "of/from" },
    "da": { type: "preposicao", def: "Preposição DE + artigo A", eng: "of the" },
    "das": { type: "preposicao", def: "Preposição DE + artigo AS", eng: "of the" },
    "do": { type: "preposicao", def: "Preposição DE + artigo O", eng: "of the" },
    "dos": { type: "preposicao", def: "Preposição DE + artigo OS", eng: "of the" },
    "sobre": { type: "preposicao", def: "A respeito de/em cima de", eng: "about/on" },
    "no": { type: "preposicao", def: "Preposição EM + artigo O", eng: "in the" },
    "na": { type: "preposicao", def: "Preposição EM + artigo A", eng: "in the" },
    "nos": { type: "preposicao", def: "Preposição EM + artigo OS", eng: "in the" },
    "nas": { type: "preposicao", def: "Preposição EM + artigo AS", eng: "in the" },
    "sem": { type: "preposicao", def: "Ausência de algo", eng: "without" },
    "com": { type: "preposicao", def: "Acompanhado de", eng: "with" },
    "por": { type: "preposicao", def: "Indica causa/meio/através", eng: "by/for/through" },
    "para": { type: "preposicao", def: "Indica finalidade/direção", eng: "for/to" },
    "aos": { type: "preposicao", def: "Preposição A + artigo OS", eng: "to the" },
    "ao": { type: "preposicao", def: "Preposição A + artigo O", eng: "to the" },
    "à": { type: "preposicao", def: "Preposição A + artigo A", eng: "to the/at" },
    "a": { type: "preposicao", def: "Direcionado a", eng: "to" },
    "desta": { type: "preposicao", def: "Preposição DE + pronome ESTA", eng: "of this" },
    "pelas": { type: "preposicao", def: "Preposição POR + artigo AS", eng: "through the" },
    "nele": { type: "preposicao", def: "Preposição EM + pronome ELE", eng: "in him" },
    "num": { type: "preposicao", def: "Preposição EM + artigo UM", eng: "in a" },
    "numa": { type: "preposicao", def: "Preposição EM + artigo UMA", eng: "in a" },
    "dele": { type: "preposicao", def: "Preposição DE + pronome ELE", eng: "of him" },
    "durante": { type: "preposicao", def: "No decorrer de", eng: "during" },
    "entre": { type: "preposicao", def: "No meio de", eng: "among/between" },
    "até": { type: "preposicao", def: "Limite temporal ou espacial", eng: "until" },
    "exceto": { type: "preposicao", def: "Com exceção de", eng: "except" },
    "naquele": { type: "preposicao", def: "Preposição EM + pronome AQUELE", eng: "in that" },
    "sob": { type: "preposicao", def: "Debaixo de", eng: "under" },
    "através": { type: "preposicao", def: "Por meio de", eng: "through" },
    "desses": { type: "preposicao", def: "Preposição DE + pronome ESSES", eng: "of these" },
    "disso": { type: "preposicao", def: "Preposição DE + pronome ISSO", eng: "of that" },
    "noutro": { type: "preposicao", def: "Preposição EM + pronome OUTRO", eng: "in another" },
    "dentre": { type: "preposicao", def: "De entre, do meio de", eng: "from among" },
    "ante": { type: "preposicao", def: "Diante de, perante", eng: "before" },
    "após": { type: "preposicao", def: "Depois de", eng: "after" },
    "perante": { type: "preposicao", def: "Diante de, em frente a", eng: "before" },
    "contra": { type: "preposicao", def: "Em oposição a", eng: "against" },
    "desde": { type: "preposicao", def: "A partir de", eng: "since" },
    "mediante": { type: "preposicao", def: "Por meio de", eng: "by means of" },
    "segundo": { type: "preposicao", def: "Conforme, de acordo com", eng: "according to" },
    "versus": { type: "preposicao", def: "Contra, em oposição a", eng: "versus" },
    "via": { type: "preposicao", def: "Por meio de, através de", eng: "via" },
    "junto": { type: "preposicao", def: "Próximo a, ao lado de", eng: "next to" },
    "conforme": { type: "preposicao", def: "De acordo com", eng: "according to" },
    "consoante": { type: "preposicao", def: "Conforme, segundo", eng: "according to" },
    "salvo": { type: "preposicao", def: "Com exceção de", eng: "except" },
    "fora": { type: "preposicao", def: "Exceto, com exceção de", eng: "except" },
    "afora": { type: "preposicao", def: "Exceto, além de", eng: "apart from" },
    "malgrado": { type: "preposicao", def: "Apesar de", eng: "despite" },
    "tirante": { type: "preposicao", def: "Com exceção de", eng: "except" },
    "durante": { type: "preposicao", def: "No decorrer de", eng: "during" },
    "debaixo": { type: "preposicao", def: "Sob, abaixo de", eng: "under" },
    "acima": { type: "preposicao", def: "Sobre, em cima de", eng: "above" },
    "abaixo": { type: "preposicao", def: "Sob, debaixo de", eng: "below" },
    "atrás": { type: "preposicao", def: "Na parte posterior", eng: "behind" },
    "dentro": { type: "preposicao", def: "No interior de", eng: "inside" },
    "fora": { type: "preposicao", def: "No exterior de", eng: "outside" },
    "perto": { type: "preposicao", def: "Próximo a", eng: "near" },
    "longe": { type: "preposicao", def: "Distante de", eng: "far from" },
    "diante": { type: "preposicao", def: "Em frente a", eng: "in front of" },
    "defronte": { type: "preposicao", def: "Em frente a", eng: "in front of" },
    "através": { type: "preposicao", def: "Por meio de", eng: "through" },
    "perante": { type: "preposicao", def: "Diante de", eng: "before" },
    "dentre": { type: "preposicao", def: "De entre", eng: "from among" },
    "aquém": { type: "preposicao", def: "Do lado de cá", eng: "on this side of" },
    "além": { type: "preposicao", def: "Do lado de lá", eng: "beyond" },
    "deste": { type: "preposicao", def: "Preposição DE + pronome ESTE", eng: "of this" },
    "desse": { type: "preposicao", def: "Preposição DE + pronome ESSE", eng: "of that" },
    "daquele": { type: "preposicao", def: "Preposição DE + pronome AQUELE", eng: "of that" },
    "daquela": { type: "preposicao", def: "Preposição DE + pronome AQUELA", eng: "of that" },
    "nesta": { type: "preposicao", def: "Preposição EM + pronome ESTA", eng: "in this" },
    "nesse": { type: "preposicao", def: "Preposição EM + pronome ESSE", eng: "in that" },
    "nessa": { type: "preposicao", def: "Preposição EM + pronome ESSA", eng: "in that" },
    "naquele": { type: "preposicao", def: "Preposição EM + pronome AQUELE", eng: "in that" },
    "naquela": { type: "preposicao", def: "Preposição EM + pronome AQUELA", eng: "in that" },
    "àquele": { type: "preposicao", def: "Preposição A + pronome AQUELE", eng: "to that" },
    "àquela": { type: "preposicao", def: "Preposição A + pronome AQUELA", eng: "to that" },
    "pelo": { type: "preposicao", def: "Preposição POR + artigo O", eng: "by the" },
    "pela": { type: "preposicao", def: "Preposição POR + artigo A", eng: "by the" },
    "pelos": { type: "preposicao", def: "Preposição POR + artigo OS", eng: "by the" },
    "àqueles": { type: "preposicao", def: "Preposição A + pronome AQUELES", eng: "to those" },
    "àquelas": { type: "preposicao", def: "Preposição A + pronome AQUELAS", eng: "to those" },
    "daqueles": { type: "preposicao", def: "Preposição DE + pronome AQUELES", eng: "of those" },
    "daquelas": { type: "preposicao", def: "Preposição DE + pronome AQUELAS", eng: "of those" },
    "naqueles": { type: "preposicao", def: "Preposição EM + pronome AQUELES", eng: "in those" },
    "naquelas": { type: "preposicao", def: "Preposição EM + pronome AQUELAS", eng: "in those" },
    "desta": { type: "preposicao", def: "Preposição DE + pronome ESTA", eng: "of this" },
    "neste": { type: "preposicao", def: "Preposição EM + pronome ESTE", eng: "in this" },
    "destes": { type: "preposicao", def: "Preposição DE + pronome ESTES", eng: "of these" },
    "nestas": { type: "preposicao", def: "Preposição EM + pronome ESTAS", eng: "in these" },
    "nestes": { type: "preposicao", def: "Preposição EM + pronome ESTES", eng: "in these" },
    "desses": { type: "preposicao", def: "Preposição DE + pronome ESSES", eng: "of these" },
    "delas": { type: "preposicao", def: "Preposição DE + pronome ELAS", eng: "of them" },
    "deles": { type: "preposicao", def: "Preposição DE + pronome ELES", eng: "of them" },
    "nelas": { type: "preposicao", def: "Preposição EM + pronome ELAS", eng: "in them" },
    "neles": { type: "preposicao", def: "Preposição EM + pronome ELES", eng: "in them" },
    "comigo": { type: "preposicao", def: "Preposição COM + pronome MIM", eng: "with me" },
    "contigo": { type: "preposicao", def: "Preposição COM + pronome TI", eng: "with you" },
    "conosco": { type: "preposicao", def: "Preposição COM + pronome NÓS", eng: "with us" },
    "convosco": { type: "preposicao", def: "Preposição COM + pronome VÓS", eng: "with you" },
    "consigo": { type: "preposicao", def: "Preposição COM + pronome SI", eng: "with oneself" },
    "dele": { type: "preposicao", def: "Preposição DE + pronome ELE", eng: "of him" },
    "dela": { type: "preposicao", def: "Preposição DE + pronome ELA", eng: "of her" },
    "disto": { type: "preposicao", def: "Preposição DE + pronome ISTO", eng: "of this" },
    "nisto": { type: "preposicao", def: "Preposição EM + pronome ISTO", eng: "in this" },
    "daquilo": { type: "preposicao", def: "Preposição DE + pronome AQUILO", eng: "of that" },
    "naquilo": { type: "preposicao", def: "Preposição EM + pronome AQUILO", eng: "in that" },

    // --- CONJUNÇÕES ---
    "quando": { type: "conjuncao", def: "No momento em que", eng: "when" },
    "e": { type: "conjuncao", def: "Conecta palavras ou frases", eng: "and" },
    "mas": { type: "conjuncao", def: "Indica contraste", eng: "but" },
    "ou": { type: "conjuncao", def: "Alternativa", eng: "or" },
    "pois": { type: "conjuncao", def: "Porque, uma vez que", eng: "because" },
    "se": { type: "conjuncao", def: "Condicional", eng: "if" },
    "como": { type: "conjuncao", def: "De que maneira/comparação", eng: "how/like/as" },
    "nem": { type: "conjuncao", def: "E também não", eng: "neither/nor" },
    "porém": { type: "conjuncao", def: "Contudo, entretanto", eng: "however" },
    "portanto": { type: "conjuncao", def: "Consequentemente", eng: "therefore" },
    "porque": { type: "conjuncao", def: "Por qual razão", eng: "because" },
    "ora": { type: "conjuncao", def: "Agora, neste momento", eng: "now" },
    "que": { type: "conjuncao", def: "Conecta orações", eng: "that" },
    "embora": { type: "conjuncao", def: "Ainda que, apesar de", eng: "although" },
    "conquanto": { type: "conjuncao", def: "Ainda que, embora", eng: "although" },
    "todavia": { type: "conjuncao", def: "Contudo, porém", eng: "however" },
    "contudo": { type: "conjuncao", def: "Porém, todavia", eng: "however" },
    "entretanto": { type: "conjuncao", def: "Porém, mas", eng: "however" },
    "no entanto": { type: "conjuncao", def: "Porém, todavia", eng: "however" },
    "não obstante": { type: "conjuncao", def: "Apesar disso", eng: "nevertheless" },
    "logo": { type: "conjuncao", def: "Por isso, portanto", eng: "therefore" },
    "pois": { type: "conjuncao", def: "Porque, uma vez que", eng: "for" },
    "porquanto": { type: "conjuncao", def: "Porque, visto que", eng: "since" },
    "visto que": { type: "conjuncao", def: "Porque, já que", eng: "since" },
    "já que": { type: "conjuncao", def: "Visto que, porque", eng: "since" },
    "uma vez que": { type: "conjuncao", def: "Já que, visto que", eng: "since" },
    "assim que": { type: "conjuncao", def: "Logo que, quando", eng: "as soon as" },
    "logo que": { type: "conjuncao", def: "Assim que, quando", eng: "as soon as" },
    "mal": { type: "conjuncao", def: "Assim que, logo que", eng: "as soon as" },
    "enquanto": { type: "conjuncao", def: "Ao mesmo tempo que", eng: "while" },
    "ao passo que": { type: "conjuncao", def: "Enquanto", eng: "whereas" },
    "à medida que": { type: "conjuncao", def: "Na proporção que", eng: "as" },
    "à proporção que": { type: "conjuncao", def: "À medida que", eng: "as" },
    "conforme": { type: "conjuncao", def: "Segundo, de acordo com", eng: "according to" },
    "consoante": { type: "conjuncao", def: "Conforme, segundo", eng: "according to" },
    "segundo": { type: "conjuncao", def: "Conforme, de acordo", eng: "according to" },
    "para que": { type: "conjuncao", def: "A fim de que", eng: "so that" },
    "a fim de que": { type: "conjuncao", def: "Para que", eng: "in order that" },
    "ainda que": { type: "conjuncao", def: "Mesmo que, embora", eng: "even though" },
    "mesmo que": { type: "conjuncao", def: "Ainda que, embora", eng: "even if" },
    "posto que": { type: "conjuncao", def: "Embora, ainda que", eng: "although" },
    "se bem que": { type: "conjuncao", def: "Embora, ainda que", eng: "although" },
    "caso": { type: "conjuncao", def: "Se, na hipótese de", eng: "if" },
    "contanto que": { type: "conjuncao", def: "Desde que, se", eng: "provided that" },
    "desde que": { type: "conjuncao", def: "Contanto que, se", eng: "provided that" },
    "salvo se": { type: "conjuncao", def: "A menos que, exceto se", eng: "unless" },
    "a menos que": { type: "conjuncao", def: "Salvo se, exceto se", eng: "unless" },
    "a não ser que": { type: "conjuncao", def: "A menos que", eng: "unless" },
    "sem que": { type: "conjuncao", def: "A não ser que", eng: "without" },
    "como": { type: "conjuncao", def: "De que maneira, comparação", eng: "as/like" },
    "tal qual": { type: "conjuncao", def: "Como, assim como", eng: "just as" },
    "assim como": { type: "conjuncao", def: "Do mesmo modo que", eng: "just as" },
    "bem como": { type: "conjuncao", def: "E também, assim como", eng: "as well as" },
    "que": { type: "conjuncao", def: "Do que (comparativo)", eng: "than" },
    "quanto": { type: "conjuncao", def: "Como (comparativo)", eng: "as" },
    "senão": { type: "conjuncao", def: "Caso contrário, do contrário", eng: "otherwise" },
    "aliás": { type: "conjuncao", def: "Além disso, ou melhor", eng: "besides" },
    "ademais": { type: "conjuncao", def: "Além disso", eng: "moreover" },
    "outrossim": { type: "conjuncao", def: "Além disso", eng: "moreover" },
    "igualmente": { type: "conjuncao", def: "Do mesmo modo", eng: "likewise" },
    "similarmente": { type: "conjuncao", def: "De modo similar", eng: "similarly" },
    "quer": { type: "conjuncao", def: "Seja (alternativa)", eng: "whether" },
    "seja": { type: "conjuncao", def: "Quer (alternativa)", eng: "whether" },
    "quer... quer": { type: "conjuncao", def: "Seja... seja", eng: "whether... or" },
    "ora... ora": { type: "conjuncao", def: "Alternância", eng: "now... now" },
    "já... já": { type: "conjuncao", def: "Ora... ora", eng: "now... now" },
    "mas também": { type: "conjuncao", def: "E também", eng: "but also" },
    "não só": { type: "conjuncao", def: "Não apenas", eng: "not only" },
    "tanto... quanto": { type: "conjuncao", def: "Assim... como", eng: "both... and" },
    "não apenas": { type: "conjuncao", def: "Não só", eng: "not only" },
    "tampouco": { type: "conjuncao", def: "Também não", eng: "neither" },
    "então": { type: "conjuncao", def: "Nesse caso, portanto", eng: "then" },
    "assim": { type: "conjuncao", def: "Dessa forma, portanto", eng: "thus" },
    "por isso": { type: "conjuncao", def: "Portanto, logo", eng: "therefore" },
    "por conseguinte": { type: "conjuncao", def: "Portanto", eng: "consequently" },
    "consequentemente": { type: "conjuncao", def: "Por consequência", eng: "consequently" },
    "destarte": { type: "conjuncao", def: "Assim, portanto", eng: "thus" },
    "dessarte": { type: "conjuncao", def: "Assim, destarte", eng: "thus" },

    // --- ADVÉRBIOS ---
    "então": { type: "advérbio", def: "Nesse caso, portanto", eng: "then" },
    "não": { type: "advérbio", def: "Negação", eng: "not" },
    "sim": { type: "advérbio", def: "Afirmação", eng: "yes" },
    "depois": { type: "advérbio", def: "Posteriormente, em seguida", eng: "after" },
    "assim": { type: "advérbio", def: "Desta maneira", eng: "like this/so" },
    "sempre": { type: "advérbio", def: "Em todos os momentos", eng: "always" },
    "claramente": { type: "advérbio", def: "De forma clara", eng: "clearly" },
    "dentro": { type: "advérbio", def: "Interior, parte interna", eng: "inside" },
    "fora": { type: "advérbio", def: "Exterior, parte externa", eng: "outside" },
    "muito": { type: "advérbio", def: "Em grande quantidade", eng: "very" },
    "mais": { type: "advérbio", def: "Em maior grau", eng: "more" },
    "menos": { type: "advérbio", def: "Em menor grau", eng: "less" },
    "mal": { type: "advérbio", def: "Apenas, quase não", eng: "barely" },
    "nunca": { type: "advérbio", def: "Em momento algum", eng: "never" },
    "intimamente": { type: "advérbio", def: "De perto, profundamente", eng: "intimately" },
    "perto": { type: "advérbio", def: "Próximo", eng: "close" },
    "pouco": { type: "advérbio", def: "Em pequena quantidade", eng: "little" },
    "tão": { type: "advérbio", def: "Tanto, em tal grau", eng: "so" },
    "realmente": { type: "advérbio", def: "De verdade, verdadeiramente", eng: "really" },
    "aqui": { type: "advérbio", def: "Neste lugar", eng: "here" },
    "ali": { type: "advérbio", def: "Naquele lugar", eng: "there" },
    "lá": { type: "advérbio", def: "Naquele lugar", eng: "there" },
    "certamente": { type: "advérbio", def: "Com certeza", eng: "certainly" },
    "finalmente": { type: "advérbio", def: "Por fim, enfim", eng: "finally" },
    "lentamente": { type: "advérbio", def: "De forma lenta", eng: "slowly" },
    "suavemente": { type: "advérbio", def: "De forma suave", eng: "gently" },
    "já": { type: "advérbio", def: "Neste momento", eng: "already" },
    "apenas": { type: "advérbio", def: "Somente", eng: "only" },
    "exatamente": { type: "advérbio", def: "Precisamente", eng: "exactly" },
    "onde": { type: "advérbio", def: "Em que lugar", eng: "where" },
    "aonde": { type: "advérbio", def: "Para que lugar", eng: "where to" },
    "aí": { type: "advérbio", def: "Nesse lugar", eng: "there" },
    "abruptamente": { type: "advérbio", def: "De forma abrupta", eng: "abruptly" },
    "longe": { type: "advérbio", def: "A grande distância", eng: "far" },
    "talvez": { type: "advérbio", def: "Possivelmente", eng: "perhaps" },
    "felizmente": { type: "advérbio", def: "Por sorte", eng: "fortunately" },
    "só": { type: "advérbio", def: "Somente", eng: "only" },
    "além": { type: "advérbio", def: "Mais longe", eng: "beyond" },
    "infelizmente": { type: "advérbio", def: "Por infelicidade", eng: "unfortunately" },
    "antes": { type: "advérbio", def: "Anteriormente", eng: "before" },
    "ainda": { type: "advérbio", def: "Até agora", eng: "still" },
    "também": { type: "advérbio", def: "Igualmente", eng: "also" },
    "embora": { type: "advérbio", def: "Para longe", eng: "away" },
    "bem": { type: "advérbio", def: "De modo satisfatório", eng: "well" },
    "mesmo": { type: "advérbio", def: "Exatamente", eng: "very" },
    // --- ADVÉRBIOS (continuação) ---

    "aí": { type: "advérbio", def: "Nesse lugar", eng: "there" },
    "cá": { type: "advérbio", def: "Aqui, neste lugar", eng: "here" },
    "acima": { type: "advérbio", def: "Em lugar superior", eng: "above" },
    "abaixo": { type: "advérbio", def: "Em lugar inferior", eng: "below" },
    "dentro": { type: "advérbio", def: "No interior", eng: "inside" },
    "fora": { type: "advérbio", def: "No exterior", eng: "outside" },
    "adiante": { type: "advérbio", def: "À frente", eng: "ahead" },
    "atrás": { type: "advérbio", def: "Na parte posterior", eng: "behind" },
    "algures": { type: "advérbio", def: "Em algum lugar", eng: "somewhere" },
    "alhures": { type: "advérbio", def: "Em outro lugar", eng: "elsewhere" },
    "nenhures": { type: "advérbio", def: "Em nenhum lugar", eng: "nowhere" },
    "hoje": { type: "advérbio", def: "Neste dia", eng: "today" },
    "ontem": { type: "advérbio", def: "No dia anterior", eng: "yesterday" },
    "amanhã": { type: "advérbio", def: "No dia seguinte", eng: "tomorrow" },
    "anteontem": { type: "advérbio", def: "Dois dias atrás", eng: "day before yesterday" },
    "outrora": { type: "advérbio", def: "Em tempos passados", eng: "formerly" },
    "antigamente": { type: "advérbio", def: "Em tempos antigos", eng: "formerly" },
    "breve": { type: "advérbio", def: "Em breve, logo", eng: "soon" },
    "brevemente": { type: "advérbio", def: "Em breve", eng: "briefly" },
    "logo": { type: "advérbio", def: "Em breve, depressa", eng: "soon" },
    "imediatamente": { type: "advérbio", def: "De imediato", eng: "immediately" },
    "instantaneamente": { type: "advérbio", def: "No instante", eng: "instantly" },
    "prontamente": { type: "advérbio", def: "De forma pronta", eng: "promptly" },
    "repentinamente": { type: "advérbio", def: "De repente", eng: "suddenly" },
    "subitamente": { type: "advérbio", def: "De súbito", eng: "suddenly" },
    "doravante": { type: "advérbio", def: "Daqui em diante", eng: "henceforth" },
    "futuramente": { type: "advérbio", def: "No futuro", eng: "in the future" },
    "posteriormente": { type: "advérbio", def: "Depois, mais tarde", eng: "later" },
    "anteriormente": { type: "advérbio", def: "Antes", eng: "previously" },
    "previamente": { type: "advérbio", def: "Antes, anteriormente", eng: "previously" },
    "primeiramente": { type: "advérbio", def: "Em primeiro lugar", eng: "firstly" },
    "ultimamente": { type: "advérbio", def: "Recentemente", eng: "lately" },
    "recentemente": { type: "advérbio", def: "Há pouco tempo", eng: "recently" },
    "outrora": { type: "advérbio", def: "Noutro tempo", eng: "once" },
    "jamais": { type: "advérbio", def: "Nunca, em tempo algum", eng: "never" },
    "sempre": { type: "advérbio", def: "Em todos os momentos", eng: "always" },
    "constantemente": { type: "advérbio", def: "De forma constante", eng: "constantly" },
    "frequentemente": { type: "advérbio", def: "Com frequência", eng: "frequently" },
    "raramente": { type: "advérbio", def: "Poucas vezes", eng: "rarely" },
    "ocasionalmente": { type: "advérbio", def: "De vez em quando", eng: "occasionally" },
    "eventualmente": { type: "advérbio", def: "Possivelmente", eng: "eventually" },
    "às vezes": { type: "advérbio", def: "Algumas vezes", eng: "sometimes" },
    "geralmente": { type: "advérbio", def: "De modo geral", eng: "generally" },
    "usualmente": { type: "advérbio", def: "De modo usual", eng: "usually" },
    "normalmente": { type: "advérbio", def: "De modo normal", eng: "normally" },
    "habitualmente": { type: "advérbio", def: "Por hábito", eng: "habitually" },
    "comumente": { type: "advérbio", def: "De forma comum", eng: "commonly" },
    "ordinariamente": { type: "advérbio", def: "De forma ordinária", eng: "ordinarily" },
    "sim": { type: "advérbio", def: "Afirmação", eng: "yes" },
    "certamente": { type: "advérbio", def: "Com certeza", eng: "certainly" },
    "decerto": { type: "advérbio", def: "Certamente", eng: "certainly" },
    "indubitavelmente": { type: "advérbio", def: "Sem dúvida", eng: "undoubtedly" },
    "seguramente": { type: "advérbio", def: "Com segurança", eng: "surely" },
    "efetivamente": { type: "advérbio", def: "De fato", eng: "effectively" },
    "realmente": { type: "advérbio", def: "De verdade", eng: "really" },
    "deveras": { type: "advérbio", def: "Realmente", eng: "indeed" },
    "absolutamente": { type: "advérbio", def: "De forma absoluta", eng: "absolutely" },
    "positivamente": { type: "advérbio", def: "De forma positiva", eng: "positively" },
    "não": { type: "advérbio", def: "Negação", eng: "not" },
    "nem": { type: "advérbio", def: "E também não", eng: "nor" },
    "nunca": { type: "advérbio", def: "Em momento algum", eng: "never" },
    "jamais": { type: "advérbio", def: "Nunca", eng: "never" },
    "tampouco": { type: "advérbio", def: "Também não", eng: "neither" },
    "negativamente": { type: "advérbio", def: "De forma negativa", eng: "negatively" },
    "talvez": { type: "advérbio", def: "Possivelmente", eng: "perhaps" },
    "porventura": { type: "advérbio", def: "Por acaso, talvez", eng: "perhaps" },
    "quiçá": { type: "advérbio", def: "Talvez", eng: "maybe" },
    "acaso": { type: "advérbio", def: "Por acaso", eng: "by chance" },
    "possivelmente": { type: "advérbio", def: "De forma possível", eng: "possibly" },
    "provavelmente": { type: "advérbio", def: "De forma provável", eng: "probably" },
    "presumivelmente": { type: "advérbio", def: "Presumidamente", eng: "presumably" },
    "eventualmente": { type: "advérbio", def: "Possivelmente", eng: "possibly" },
    "muito": { type: "advérbio", def: "Em grande quantidade", eng: "very" },
    "demais": { type: "advérbio", def: "Em excesso", eng: "too much" },
    "demasiado": { type: "advérbio", def: "Excessivamente", eng: "too" },
    "bastante": { type: "advérbio", def: "Suficientemente", eng: "quite" },
    "assaz": { type: "advérbio", def: "Bastante, muito", eng: "quite" },
    "mais": { type: "advérbio", def: "Em maior grau", eng: "more" },
    "menos": { type: "advérbio", def: "Em menor grau", eng: "less" },
    "pouco": { type: "advérbio", def: "Em pequena quantidade", eng: "little" },
    "quanto": { type: "advérbio", def: "Em que quantidade", eng: "how much" },
    "quão": { type: "advérbio", def: "Quanto", eng: "how" },
    "tão": { type: "advérbio", def: "Tanto, em tal grau", eng: "so" },
    "tanto": { type: "advérbio", def: "Em tal grau", eng: "so much" },
    "quase": { type: "advérbio", def: "Por pouco", eng: "almost" },
    "apenas": { type: "advérbio", def: "Somente", eng: "only" },
    "somente": { type: "advérbio", def: "Apenas, só", eng: "only" },
    "unicamente": { type: "advérbio", def: "Exclusivamente", eng: "solely" },
    "exclusivamente": { type: "advérbio", def: "Unicamente", eng: "exclusively" },
    "especialmente": { type: "advérbio", def: "De modo especial", eng: "especially" },
    "principalmente": { type: "advérbio", def: "Sobretudo", eng: "mainly" },
    "sobretudo": { type: "advérbio", def: "Principalmente", eng: "above all" },
    "particularmente": { type: "advérbio", def: "De modo particular", eng: "particularly" },
    "mormente": { type: "advérbio", def: "Principalmente", eng: "especially" },
    "nomeadamente": { type: "advérbio", def: "Especialmente", eng: "namely" },
    "maximamente": { type: "advérbio", def: "No máximo grau", eng: "maximally" },
    "completamente": { type: "advérbio", def: "De forma completa", eng: "completely" },
    "totalmente": { type: "advérbio", def: "De forma total", eng: "totally" },
    "inteiramente": { type: "advérbio", def: "Por inteiro", eng: "entirely" },
    "plenamente": { type: "advérbio", def: "De forma plena", eng: "fully" },
    "perfeitamente": { type: "advérbio", def: "De forma perfeita", eng: "perfectly" },
    "absolutamente": { type: "advérbio", def: "De forma absoluta", eng: "absolutely" },
    "relativamente": { type: "advérbio", def: "De forma relativa", eng: "relatively" },
    "parcialmente": { type: "advérbio", def: "Em parte", eng: "partially" },
    "meio": { type: "advérbio", def: "Um pouco, parcialmente", eng: "somewhat" },
    "semi": { type: "advérbio", def: "Meio, parcialmente", eng: "semi" },
    "quase": { type: "advérbio", def: "Por pouco", eng: "almost" },
    "aproximadamente": { type: "advérbio", def: "De forma aproximada", eng: "approximately" },
    "cerca": { type: "advérbio", def: "Aproximadamente", eng: "about" },
    "praticamente": { type: "advérbio", def: "Quase", eng: "practically" },
    "como": { type: "advérbio", def: "De que maneira", eng: "how" },
    "assim": { type: "advérbio", def: "Desta maneira", eng: "thus" },
    "mal": { type: "advérbio", def: "De modo ruim", eng: "badly" },
    "bem": { type: "advérbio", def: "De modo bom", eng: "well" },
    "melhor": { type: "advérbio", def: "De modo superior", eng: "better" },
    "pior": { type: "advérbio", def: "De modo inferior", eng: "worse" },
    "depressa": { type: "advérbio", def: "Rapidamente", eng: "quickly" },
    "devagar": { type: "advérbio", def: "Lentamente", eng: "slowly" },
    "rapidamente": { type: "advérbio", def: "De forma rápida", eng: "rapidly" },
    "velozmente": { type: "advérbio", def: "De forma veloz", eng: "swiftly" },
    "ligeiramente": { type: "advérbio", def: "De forma ligeira", eng: "lightly" },
    "vagarosamente": { type: "advérbio", def: "De forma vagarosa", eng: "slowly" },
    "pausadamente": { type: "advérbio", def: "Com pausas", eng: "pausedly" },
    "gradualmente": { type: "advérbio", def: "De forma gradual", eng: "gradually" },
    "progressivamente": { type: "advérbio", def: "De forma progressiva", eng: "progressively" },
    "sucessivamente": { type: "advérbio", def: "De forma sucessiva", eng: "successively" },
    "repentinamente": { type: "advérbio", def: "De repente", eng: "suddenly" },
    "subitamente": { type: "advérbio", def: "De súbito", eng: "suddenly" },
    "abruptamente": { type: "advérbio", def: "De forma abrupta", eng: "abruptly" },
    "bruscamente": { type: "advérbio", def: "De forma brusca", eng: "abruptly" },
    "calmamente": { type: "advérbio", def: "Com calma", eng: "calmly" },
    "tranquilamente": { type: "advérbio", def: "Com tranquilidade", eng: "quietly" },
    "serenamente": { type: "advérbio", def: "Com serenidade", eng: "serenely" },
    "pacificamente": { type: "advérbio", def: "De forma pacífica", eng: "peacefully" },
    "silenciosamente": { type: "advérbio", def: "Em silêncio", eng: "silently" },
    "discretamente": { type: "advérbio", def: "De forma discreta", eng: "discreetly" },
    "cuidadosamente": { type: "advérbio", def: "Com cuidado", eng: "carefully" },
    "atentamente": { type: "advérbio", def: "Com atenção", eng: "attentively" },
    "minuciosamente": { type: "advérbio", def: "De forma minuciosa", eng: "minutely" },
    "detalhadamente": { type: "advérbio", def: "Com detalhes", eng: "in detail" },
    "superficialmente": { type: "advérbio", def: "De forma superficial", eng: "superficially" },
    "profundamente": { type: "advérbio", def: "De forma profunda", eng: "deeply" },
    "intensamente": { type: "advérbio", def: "De forma intensa", eng: "intensely" },
    "fortemente": { type: "advérbio", def: "De forma forte", eng: "strongly" },
    "firmemente": { type: "advérbio", def: "De forma firme", eng: "firmly" },
    "energicamente": { type: "advérbio", def: "Com energia", eng: "energetically" },
    "vigorosamente": { type: "advérbio", def: "Com vigor", eng: "vigorously" },
    "violentamente": { type: "advérbio", def: "De forma violenta", eng: "violently" },
    "brutalmente": { type: "advérbio", def: "De forma brutal", eng: "brutally" },
    "duramente": { type: "advérbio", def: "De forma dura", eng: "harshly" },
    "severamente": { type: "advérbio", def: "De forma severa", eng: "severely" },
    "rigorosamente": { type: "advérbio", def: "De forma rigorosa", eng: "rigorously" },
    "estritamente": { type: "advérbio", def: "De forma estrita", eng: "strictly" },
    "frouxamente": { type: "advérbio", def: "De forma frouxa", eng: "loosely" },
    "levemente": { type: "advérbio", def: "De forma leve", eng: "lightly" },
    "suavemente": { type: "advérbio", def: "De forma suave", eng: "gently" },
    "docemente": { type: "advérbio", def: "De forma doce", eng: "sweetly" },
    "delicadamente": { type: "advérbio", def: "De forma delicada", eng: "delicately" },
    "gentilmente": { type: "advérbio", def: "De forma gentil", eng: "kindly" },
    "bondosamente": { type: "advérbio", def: "De forma bondosa", eng: "kindly" },
    "amavelmente": { type: "advérbio", def: "De forma amável", eng: "amiably" },
    "cordialmente": { type: "advérbio", def: "De forma cordial", eng: "cordially" },
    "afetuosamente": { type: "advérbio", def: "Com afeto", eng: "affectionately" },
    "ternamente": { type: "advérbio", def: "Com ternura", eng: "tenderly" },
    "carinhosamente": { type: "advérbio", def: "Com carinho", eng: "lovingly" },
    "amorosamente": { type: "advérbio", def: "Com amor", eng: "lovingly" },
    "friamente": { type: "advérbio", def: "De forma fria", eng: "coldly" },
    "indiferentemente": { type: "advérbio", def: "Com indiferença", eng: "indifferently" },
    "cruelmente": { type: "advérbio", def: "De forma cruel", eng: "cruelly" },
    "malvadamente": { type: "advérbio", def: "De forma malvada", eng: "wickedly" },
    "maldosamente": { type: "advérbio", def: "Com maldade", eng: "maliciously" },
    "alegremente": { type: "advérbio", def: "Com alegria", eng: "cheerfully" },
    "felizmente": { type: "advérbio", def: "Com felicidade", eng: "happily" },
    "jubilosamente": { type: "advérbio", def: "Com júbilo", eng: "jubilantly" },
    "prazerosamente": { type: "advérbio", def: "Com prazer", eng: "pleasantly" },
    "agradavelmente": { type: "advérbio", def: "De forma agradável", eng: "pleasantly" },
    "satisfatoriamente": { type: "advérbio", def: "De forma satisfatória", eng: "satisfactorily" },
    "contentamente": { type: "advérbio", def: "Com contentamento", eng: "contentedly" },
    "tristemente": { type: "advérbio", def: "De forma triste", eng: "sadly" },
    "melancolicamente": { type: "advérbio", def: "Com melancolia", eng: "melancholically" },
    "dolorosamente": { type: "advérbio", def: "De forma dolorosa", eng: "painfully" },
    "penosamente": { type: "advérbio", def: "De forma penosa", eng: "painfully" },
    "angustiosamente": { type: "advérbio", def: "Com angústia", eng: "anxiously" },
    "ansiosamente": { type: "advérbio", def: "Com ansiedade", eng: "anxiously" },
    "nervosamente": { type: "advérbio", def: "De forma nervosa", eng: "nervously" },
    "timidamente": { type: "advérbio", def: "Com timidez", eng: "timidly" },
    "envergonhadamente": { type: "advérbio", def: "Com vergonha", eng: "ashamedly" },
    "humildemente": { type: "advérbio", def: "Com humildade", eng: "humbly" },
    "modestamente": { type: "advérbio", def: "Com modéstia", eng: "modestly" },
    "orgulhosamente": { type: "advérbio", def: "Com orgulho", eng: "proudly" },
    "vaidosamente": { type: "advérbio", def: "Com vaidade", eng: "vainly" },
    "arrogantemente": { type: "advérbio", def: "Com arrogância", eng: "arrogantly" },
    "soberbamente": { type: "advérbio", def: "Com soberba", eng: "haughtily" },
    "altivamente": { type: "advérbio", def: "De forma altiva", eng: "haughtily" },
    "desprezivamente": { type: "advérbio", def: "Com desprezo", eng: "contemptuously" },
    "desdenhosamente": { type: "advérbio", def: "Com desdém", eng: "disdainfully" },
    "respeitosamente": { type: "advérbio", def: "Com respeito", eng: "respectfully" },
    "reverentemente": { type: "advérbio", def: "Com reverência", eng: "reverently" },
    "devotamente": { type: "advérbio", def: "Com devoção", eng: "devoutly" },
    "religiosamente": { type: "advérbio", def: "De forma religiosa", eng: "religiously" },
    "piamente": { type: "advérbio", def: "De forma piedosa", eng: "piously" },
    "sinceramente": { type: "advérbio", def: "De forma sincera", eng: "sincerely" },
    "honestamente": { type: "advérbio", def: "De forma honesta", eng: "honestly" },
    "francamente": { type: "advérbio", def: "De forma franca", eng: "frankly" },
    "abertamente": { type: "advérbio", def: "De forma aberta", eng: "openly" },
    "claramente": { type: "advérbio", def: "De forma clara", eng: "clearly" },
    "evidentemente": { type: "advérbio", def: "De forma evidente", eng: "evidently" },
    "manifestamente": { type: "advérbio", def: "De forma manifesta", eng: "manifestly" },
    "obviamente": { type: "advérbio", def: "De forma óbvia", eng: "obviously" },
    "naturalmente": { type: "advérbio", def: "De forma natural", eng: "naturally" },
    "logicamente": { type: "advérbio", def: "De forma lógica", eng: "logically" },
    "racionalmente": { type: "advérbio", def: "De forma racional", eng: "rationally" },
    "razoavelmente": { type: "advérbio", def: "De forma razoável", eng: "reasonably" },
    "justamente": { type: "advérbio", def: "De forma justa", eng: "justly" },
    "injustamente": { type: "advérbio", def: "De forma injusta", eng: "unjustly" },
    "corretamente": { type: "advérbio", def: "De forma correta", eng: "correctly" },
    "erradamente": { type: "advérbio", def: "De forma errada", eng: "wrongly" },
    "incorretamente": { type: "advérbio", def: "De forma incorreta", eng: "incorrectly" },
    "adequadamente": { type: "advérbio", def: "De forma adequada", eng: "adequately" },
    "convenientemente": { type: "advérbio", def: "De forma conveniente", eng: "conveniently" },
    "apropriadamente": { type: "advérbio", def: "De forma apropriada", eng: "appropriately" },
    "oportunamente": { type: "advérbio", def: "De forma oportuna", eng: "opportunely" },
    "inoportunamente": { type: "advérbio", def: "De forma inoportuna", eng: "inopportunely" },
    "prematuramente": { type: "advérbio", def: "De forma prematura", eng: "prematurely" },
    "tardiamente": { type: "advérbio", def: "De forma tardia", eng: "belatedly" },
    "pontualmente": { type: "advérbio", def: "De forma pontual", eng: "punctually" },
    "imprevistamente": { type: "advérbio", def: "De forma imprevista", eng: "unexpectedly" },
    "inesperadamente": { type: "advérbio", def: "De forma inesperada", eng: "unexpectedly" },
    "previsivelmente": { type: "advérbio", def: "De forma previsível", eng: "predictably" },
    "deliberadamente": { type: "advérbio", def: "De forma deliberada", eng: "deliberately" },
    "intencionalmente": { type: "advérbio", def: "De forma intencional", eng: "intentionally" },
    "propositadamente": { type: "advérbio", def: "De propósito", eng: "on purpose" },
    "involuntariamente": { type: "advérbio", def: "Sem querer", eng: "involuntarily" },
    "acidentalmente": { type: "advérbio", def: "Por acidente", eng: "accidentally" },
    "casualmente": { type: "advérbio", def: "Por acaso", eng: "casually" },
    "fortuitamente": { type: "advérbio", def: "Por acaso", eng: "fortuitously" },
    "principalmente": { type: "advérbio", def: "Sobretudo", eng: "mainly" },
    "igualmente": { type: "advérbio", def: "De igual modo", eng: "equally" },
    "desigualmente": { type: "advérbio", def: "De forma desigual", eng: "unequally" },
    "uniformemente": { type: "advérbio", def: "De forma uniforme", eng: "uniformly" },
    "regularmente": { type: "advérbio", def: "De forma regular", eng: "regularly" },
    "irregularmente": { type: "advérbio", def: "De forma irregular", eng: "irregularly" },
    "sistematicamente": { type: "advérbio", def: "De forma sistemática", eng: "systematically" },
    "metodicamente": { type: "advérbio", def: "De forma metódica", eng: "methodically" },
    "ordenadamente": { type: "advérbio", def: "De forma ordenada", eng: "orderly" },
    "confusamente": { type: "advérbio", def: "De forma confusa", eng: "confusedly" },
    "caoticamente": { type: "advérbio", def: "De forma caótica", eng: "chaotically" },
    "desordenadamente": { type: "advérbio", def: "De forma desordenada", eng: "disorderly" },
    "aliás": { type: "advérbio", def: "Além disso", eng: "besides" },
    "ademais": { type: "advérbio", def: "Além disso", eng: "moreover" },
    "inclusive": { type: "advérbio", def: "Até, incluindo", eng: "including" },
    "exclusivamente": { type: "advérbio", def: "Unicamente", eng: "exclusively" },
    "simplesmente": { type: "advérbio", def: "De forma simples", eng: "simply" },
    "meramente": { type: "advérbio", def: "Apenas, só", eng: "merely" },
    "puramente": { type: "advérbio", def: "De forma pura", eng: "purely" },
    "unicamente": { type: "advérbio", def: "Exclusivamente", eng: "solely" },

    // Fallback
    "_default": { type: "desconhecido", def: "Definição não encontrada", eng: "unknown" }
};

/* =========================================
   2. THE RAW CHAPTERS (The Content)
   Raw text strings. Easy to edit.
   ========================================= */
const rawChapters = {
    1: {
        title: "Capítulo I - O Desenho da Jiboia",
        content: `Uma vez, quando eu tinha seis anos, vi uma imagem magnífica em um livro chamado Verdadeiras Histórias da Natureza, sobre a floresta primitiva. Era a foto de uma jiboia no ato de engolir um animal.
        
        Foi dito no livro: As jiboias engolem a presa inteira, sem mastigar. Então, elas não podem se mover, e dormem os seis meses da sua digestão.
        
        Então eu pensei sobre as muitas aventuras da selva e, depois de algum trabalho com um lápis de cor, consegui fazer o meu primeiro desenho. Meu desenho número um. Parecia algo como isto:
        
        Mostrei minha obra-prima aos adultos e perguntei-lhes se o desenho os assustava.
        
        Mas eles disseram: – Por que um chapéu me causaria medo?
        
        O meu desenho não era um chapéu. Era uma jiboia digerindo um elefante. Mas como os adultos não foram capazes de compreendê-lo, então eu fiz outro desenho: Eu desenhei o interior da jiboia, para que os adultos pudessem vê-la claramente. Eles sempre precisam ter as coisas explicadas. Meu desenho número dois ficou assim:
        
        A resposta dos adultos, desta vez, foi me aconselhar a deixar de lado meus desenhos de jiboias, seja por dentro ou por fora, e dedicar-me de preferência à geografia, história, aritmética e gramática. É por isso que, com a idade de seis anos, eu desisti do que poderia ter sido uma magnífica carreira de pintor. Eu estava desanimado com o fracasso do meu desenho número um e o meu desenho número dois. As pessoas grandes não compreendem nada sozinhas, e é cansativo para as crianças ter que explicar as coisas para elas sempre e sempre.
        
        Então eu tive que escolher outra profissão e aprendi a pilotar aviões. Eu voei ao redor do mundo; e é verdade que a geografia tem sido muito útil para mim. À primeira vista eu posso distinguir a China do Arizona. Se alguém se perde na noite, tal conhecimento é valioso.
        
        Eu tive durante a minha vida, muitos contatos com muita gente séria. Eu vivi muitos grandes negócios entre os adultos. Eu os vi intimamente, muito de perto. E isso não melhorou muito a minha opinião sobre eles.
        
        Sempre que eu conhecia alguém que me parecia um pouco mais lúcido, tentava a experiência de mostrar-lhe o meu desenho número um, que eu sempre mantive. Gostaria de tentar descobrir, então, se era uma pessoa de verdadeira compreensão. Mas, quem quer que fosse, ele, ou ela, sempre dizia: – Isso é um chapéu.
        
        Então eu nunca falaria com essa pessoa sobre jiboias, ou florestas primitivas, ou estrelas. Para agradá-la, fazia-me ao seu nível, e falava com ela sobre pontes, golfe, política, e gravatas. E o adulto ficava muito contente por ter encontrado um homem tão sensível.`
    },
    2: {
        title: "Capítulo II - O Encontro no Deserto",
        content: `Então eu vivi a minha vida sozinho, sem ninguém que eu pudesse realmente conversar, até que eu tive um acidente com o avião no deserto do Saara, há seis anos. Algo havia quebrado no meu motor. E como eu não tinha comigo nem mecânico nem quaisquer passageiros, pus-me a tentar os difíceis reparos sozinho. Era uma questão de vida ou morte para mim, pois eu mal tinha água potável para oito dias.
        
        A primeira noite, então, eu fui dormir na areia, a milhares de quilômetros de qualquer habitação humana. Eu estava mais isolado que um náufrago em uma jangada no meio do oceano. Assim, você pode imaginar o meu espanto, ao nascer do sol, quando fui acordado por uma voz engraçada me dizendo: – Ei, você, por favor! – Faz-me um carneiro. – O quê! – Desenha-me um carneiro!
        
        Eu me pus de pé num salto, atordoado como se tivesse sido atingido por um raio. Esfreguei os olhos e observei com cuidado ao meu redor. Então vi um garotinho extraordinário, que ali estava a me examinar com grande seriedade. Aqui você pode ver o melhor retrato que, mais tarde, eu fui capaz de fazer dele. Mas meu desenho é certamente muito menos encantador do que o seu modelo.
        
        Isso, porém, não é culpa minha. Os adultos me desanimaram em minha carreira de pintor quando eu tinha seis anos, e eu nunca aprendi a desenhar qualquer coisa, exceto jiboias do lado de fora e do lado de dentro.
        
        Olhei para esta súbita aparição com os olhos arregalados de espanto. Não se esqueça de que eu havia caído e estava a milhas de qualquer região habitada. E ainda assim o meu garotinho não parecia estar vagando pelas areias, nem parecia estar exausto de cansaço, ou com fome, sede ou medo. Nada nele deu qualquer sugestão de uma criança perdida no meio do deserto, a mil milhas de qualquer habitação humana. Quando, finalmente, eu fui capaz de falar, disse a ele: – Mas, o que você está fazendo aqui?
        
        E, em resposta, ele repetiu, muito lentamente, como se estivesse falando de uma questão de grande importância: – Você pode por favor me desenhar uma ovelha?
        
        Quando um mistério é muito poderoso, não se ousa desobedecer. Por mais absurdo que pudesse me parecer, a milhares de quilômetros de qualquer habitação humana e em perigo de morte, tirei do meu bolso uma folha de papel e minha caneta tinteiro. Mas depois me lembrei de que meus estudos foram concentrados em geografia, história, aritmética e gramática, e eu disse ao pequenino (um pouco irritado, também) que eu não sei desenhar. Ele me respondeu: – Isso não importa. Desenha-me um carneiro...
        
        Mas eu nunca tinha desenhado um carneiro. Então eu desenhei para ele uma das duas imagens que eu havia desenhado tantas vezes. E esta a da jiboia de fora. E fiquei espantado ao ouvir o meu pequeno companheiro saudar-me com: – Não, não, não! Eu não quero um elefante dentro de uma jiboia. A jiboia é uma criatura muito perigosa, e um elefante é muito pesado. Onde eu moro, tudo é muito pequeno. O que eu preciso é de uma ovelha. Desenha-me um carneiro.
        
        Então eu fiz um desenho.
        
        Ele olhou para o desenho com cuidado e então me disse: – Não. Este carneiro já está muito doente. Faça-me o outro.
        
        Então eu fiz um outro desenho.
        
        Meu amigo sorriu suavemente e com indulgência. – Veja, – disse ele – este não é um carneiro. Este é um bode. Ele tem chifres.
        
        Então eu fiz o meu desenho mais uma vez:
        
        Mas ele foi rejeitado também, assim como os outros. – Este aqui é muito velho. Eu quero um carneiro que possa viver um longo tempo.
        
        A esta altura a minha paciência se esgotou, pois eu estava ansioso em começar a fazer os reparos no meu motor. Então eu atirei-lhe este desenho:
        
        E eu falei à guisa de explicação: – Esta é apenas a sua caixa. A ovelha que você pediu está aí dentro.
        
        Fiquei muito surpreso ao ver o rosto do meu jovem juiz se iluminar: – Este é exatamente do jeito que eu queria! Você acha que esta ovelha precisará de uma grande quantidade de grama? – Por quê? – Porque onde eu moro tudo é muito pequeno... – Certamente haverá grama suficiente para ela, – eu disse. – É uma pequena ovelha que eu lhe dei.
        
        Ele inclinou a cabeça sobre o desenho. – Não é tão pequena que... Olhe! Ele foi dormir...
        
        E foi assim que eu conheci o pequeno príncipe.`
    },
    3: {
        title: "Capítulo III - De Onde Ele Veio",
        content: `Levei um tempo para entender de onde ele veio. O pequeno príncipe, que me fazia tantas perguntas, nunca parecia ouvir o que eu perguntava a ele. Foi a partir de palavras ditas ao acaso que, pouco a pouco, tudo me foi revelado. A primeira vez que viu o meu avião, por exemplo (não vou desenhar o avião, pois isto seria muito complicado para mim), ele me perguntou: – O que é essa coisa? – Não é uma coisa. Ele voa. Esta é uma aeronave. Este é o meu avião.
        
        Eu estava orgulhoso de que ele soubesse que eu podia voar. Então ele exclamou: – O quê? Você caiu do céu? – Sim, – respondi, com modéstia. – Oh! Isso é engraçado!
        
        E o pequeno príncipe rebentou numa bela risada, que me irritou. Eu espero que meus infortúnios sejam levados a sério. Em seguida, ele acrescentou: – Então, você também vêm do céu! De que planeta você é?
        
        Naquele momento, eu vislumbrei um raio de luz no mistério impenetrável da sua presença; então exigi, abruptamente: – Você vem de outro planeta?
        
        Mas ele não me respondeu. Ele balançou a cabeça lentamente, sem tirar os olhos do meu avião: – É certo que, com isso, você não pode ter vindo de muito longe...
        
        E ele afundou em um devaneio, que durou um longo tempo. Então, tomando as minhas ovelhas de seu bolso, ele encerrou-se na contemplação do seu tesouro.
        
        Você pode imaginar como a minha curiosidade foi despertada por esta meio confiança sobre os outros planetas. Fiz um grande esforço, portanto, para saber mais sobre este assunto: – Rapazinho, me diga de onde você veio? Onde é este lugar em que mora de que você fala? Aonde você quer levar sua ovelha?
        
        Depois de um silêncio pensativo, ele respondeu: – A vantagem da caixa que você me deu é que à noite ele poderá usá-lo como sua casa. – Isso é assim. E se você for bom eu vou dar-lhe uma corda, e uma estaca também, para que você possa amarrá-lo durante o dia.
        
        Mas o pequeno príncipe pareceu chocado com esta oferta: – Amarrá-lo! Que ideia estranha! – Mas se você não o amarrar, – eu disse – ele pode vagar em algum lugar, e se perder.
        
        E meu amigo caiu em outra gargalhada: – Aonde acha que ele poderia ir? – Em qualquer lugar. Seguindo a esmo...
        
        Em seguida, o pequeno príncipe disse, com sinceridade: – Isso não importa. Onde eu moro, tudo é muito pequeno!
        
        E com um pouco de melancolia, talvez, ele acrescentou: – Seguindo em frente, ninguém pode ir muito longe...`
    },
    4: {
        title: "Capítulo IV - O Asteroide B-612",
        content: `Assim, eu descobri um segundo fato de grande relevância: o planeta de onde viera o pequeno príncipe era pouco maior do que uma casa!
        
        Mas isso não me surpreendeu muito. Eu sabia muito bem que, para além dos grandes planetas – como a Terra, Júpiter, Marte, Vênus – aos quais demos nomes, há também centenas de outros, alguns dos quais são tão pequenos que é muito difícil vê-los através do telescópio. Quando um astrônomo descobre um deles ele não lhe dá um nome, mas apenas um número. Ele pode chamá-lo, por exemplo, Asteroide 325.
        
        Tenho sérios motivos para crer que o planeta de origem do pequeno príncipe é o asteroide conhecido como B-612.
        
        Este asteroide foi visto apenas uma vez por um astrônomo turco através de um telescópio, em 1909.
        
        Ele fez uma grande demonstração da sua descoberta num Congresso Internacional de Astronomia. Mas ninguém acreditou nele por causa de seus trajes turcos. Os adultos são assim...
        
        Felizmente para a reputação do asteroide B-612, um ditador turco determinou que os seus súditos, sob pena de morte, deveriam mudar seus trajes para o estilo europeu. O astrônomo fez uma nova demonstração em 1920, vestido com impressionante elegância. E desta vez todo mundo aceitou seu relatório.
        
        Se eu lhe contei esses detalhes sobre o asteroide B-612, e fez uma nota do seu número para você, foi por causa dos adultos e seus hábitos. Adultos gostam de números. Quando você lhes diz que fez um novo amigo, eles nunca lhe perguntam sobre questões essenciais. Eles nunca dizem a você: Qual é o som da sua voz? De que jogos ele mais gosta? Será que ele coleciona borboletas? Em vez disso, eles exigem: Quantos anos ele tem? Quantos irmãos ele tem? Quanto ele pesa? Quanto dinheiro o seu pai ganha? Só a partir desses números é que eles pensam que sabem alguma coisa sobre ele.
        
        Se você dissesse para os adultos: Vi uma bela casa feita de tijolos rosados, com gerânios nas janelas e pombas no telhado, eles não seriam capazes de imaginar esta casa. Você teria de dizer-lhes: Eu vi uma casa que custa cem mil francos. Em seguida, eles exclamariam: Oh, que bela casa que é!
        
        Da mesma forma, você pode dizer-lhes: A prova de que o principezinho existia é que ele era encantador, que ele ria, e que ele estava procurando por uma ovelha. Se alguém quer um carneiro, esta é uma prova de que ele existe… E em que resultaria dizer-lhes isso? Eles dariam de ombros, e o tratariam como uma criança!
        
        Mas se você lhes disser: O planeta de onde ele veio é o asteroide B-612, então eles se convenceriam e o deixariam em paz com as suas perguntas. Eles são assim. Não os culpo. As crianças devem ser muito indulgentes com as pessoas crescidas.
        
        Mas, é claro, para nós que compreendemos a vida, os números são irrelevantes. Eu teria gostado de começar essa história na forma de um conto de fadas. Eu gostaria de ter dito: Era uma vez um pequeno príncipe que vivia em um planeta que mal era maior do que ele, e que precisava de um carneiro… Para aqueles que entendem a vida, isso teria dado um maior ar de verdade a minha história.
        
        Porque eu não quero que ninguém leia o meu livro descuidadamente. Eu me sinto tão triste por essas memórias. Há seis anos que meu amigo foi embora com suas ovelhas. Se eu tento descrevê-lo aqui, é para não esquecê-lo. É triste esquecer um amigo. Nem todo mundo já teve um amigo. E se eu esquecer dele, eu posso me tornar como os adultos que já não se interessam por nada mais além de números. É por isso mesmo que eu comprei uma caixa de tintas e lápis. É difícil voltar a desenhar na minha idade, quando eu nunca tinha desenhado nada antes, com exceção da jiboia do lado de fora e a jiboia de dentro, quando eu tinha seis anos. Vou tentar, é claro, fazer os retratos mais realistas possível. Mas eu não tenho certeza do sucesso.
        
        Um desenho vai bem, o outro não tem nenhuma semelhança com o seu sujeito. Eu estou errando um pouco no tamanho: num lugar o pequeno príncipe é muito alto, noutro é muito baixo. E também estou hesitante sobre a cor de sua roupa. Então eu vou tentando da melhor maneira que posso, ora vou bem, ora me saio mal, esperando que me saia medianamente. Devo cometer alguns erros em certos detalhes importantes também. Mas que ele vai me perdoar. Meu amigo nunca explicou nada claramente para mim. Ele pensou, talvez, que eu era como ele. Mas eu, infelizmente, não sei como ver ovelhas através das paredes das caixas. Talvez eu seja um pouco como os adultos. Eu tive que envelhecer.`
    },
   5: {
        title: "Capítulo V - Os Baobás",
        content: `Todos os dias eu aprendi alguma coisa nova em nossas
conversas, algo sobre o planeta do pequeno príncipe, sua partida,
sua jornada. As informações vinham muito lentamente, de maneira
aleatória a partir das suas reflexões. Foi desta forma que eu ouvi, no
terceiro dia, sobre a catástrofe dos baobás.
Desta vez, novamente, eu tinha de agradecer às ovelhas,
porque de repente o pequeno príncipe me perguntou, como que
assaltado por uma grave dúvida:– É verdade, não é, que as ovelhas comem pequenos
arbustos?– Sim, isso é verdade.– Ah! Eu estou feliz!
Eu não entendia por que era tão importante que as ovelhas
comessem pequenos arbustos. Mas o principezinho acrescentou:– E eles também comem baobás?
Eu expliquei para o principezinho que os baobás não são
pequenos arbustos, mas, ao contrário, são árvores grandes como
castelos; e que mesmo que ele levasse toda uma manada de
elefantes embora com ele, o rebanho não comeria um único baobá.
A ideia da manada de elefantes provocou a risadinha do
príncipe.– Teríamos de colocá-los uns em cima dos outros – disse ele.
Mas ele fez um comentário inteligente:– Antes de crescerem tão grandes, os baobás começam bem
pequenos.– Isso está realmente correto – eu disse. – Mas por que você
quer as ovelhas para comer os pequenos baobás?
Ele respondeu-me de uma vez:– Oh, vem, vem! – Como se ele estivesse falando de algo que
era muito evidente.
E eu era obrigado a fazer um grande esforço mental para
resolver este problema, sem qualquer assistência.
Na verdade, como eu aprendi, havia no planeta onde o
pequeno príncipe vivia – como em todos os planetas – boas plantas
e ervas daninhas. Em consequência, havia boas sementes de
plantas e sementes ruins de ervas daninhas.
Mas as sementes são invisíveis. Elas dormem em segredo no
coração das trevas da terra, até que sejam apreendidas pelo desejo
de despertar. Então esta pequena semente vai esticar-se e começar– 
timidamente no início – a brotar um charmoso raminho
inofensivamente para cima em direção ao sol. Se for apenas um
broto de rabanete ou o raminho de uma roseira, seria bom deixá-lo
crescer onde quer que ele pudesse desejar. Mas quando é uma
planta má, é preciso destruí-la o mais rapidamente possível, no
primeiro instante em que alguém a reconhece.
Ora, havia algumas sementes terríveis no planeta lar do
príncipe; e estas são sementes de baobá. O solo daquele planeta foi
infestado por elas. Um baobá é algo que você nunca, nunca será
capaz de se livrar de se o perceber demasiado tarde. E se ele se
espalhar por todo o planeta, ele o perfurará com suas raízes. E se o
planeta for muito pequeno, e os baobás forem muitos, eles o
dividirão em pedaços…– É uma questão de disciplina – me disse mais tarde o
principezinho. – Após fazer sua higiene matinal, você deve começar
a limpeza do planeta com todo cuidado. Devemos regularmente
arrancar os baobás logo que se distingam das roseiras, já que se
assemelham quando eles são muito jovens. É um trabalho muito
tedioso, mas muito fácil.
E um dia ele me disse:– Você deveria fazer um belo desenho, de modo que as
crianças onde você mora possam ver exatamente como tudo isso é,
pois seria muito útil para eles se fossem viajar algum dia.– Às vezes – acrescentou ele – não há mal nenhum em adiar
um pouco de trabalho até outro dia. Mas quando a questão são os
baobás, isto sempre significa uma catástrofe. Conheci um planeta
que era habitado por um preguiçoso. Ele negligenciou três arbustos
pequenos…
Assim, como o pequeno príncipe me descreveu, eu fiz um
desenho daquele planeta. Eu não gosto muito de adotar um tom
moralista, mas o perigo dos baobás é tão pouco conhecido, e o risco
para alguém que viesse a se perder em um asteroide é tão
considerável, que pela primeira vez eu estou rompendo com as
minhas reservas. Portanto eu digo: “Crianças, cuidado com os
baobás!”.
Foi para avisar meus amigos de um perigo que há muito
escovado, como eu, sem saber que eu trabalhei tão duro sobre este
desenho. A lição valeu a pena o trabalho que me deu. Você pode
perguntar: “Por que neste livro os outros desenhos não são tão
grandiosos como o desenho dos baobás?” A resposta é simples: Eu
tentei, mas eu não obtive sucesso. Mas quando eu fiz os baobás eu
estava animado por um senso de urgência.`
    },
   6: {
        title: "Capítulo VI - O Pôr do Sol",
        content: `Oh, pequeno príncipe! Pouco a pouco eu vim a entender os segredos
da sua vida um tanto triste… Por muito tempo você tinha encontrado o seu
único entretenimento no prazer tranquilo de olhar o pôr do sol. Eu aprendi
este novo detalhe na manhã do quarto dia, quando você me disse:– Eu gosto muito do pôr do sol. Venha, vamos ver o pôr do sol agora.
– Mas temos de esperar, – eu disse.– Esperar? Por quê?– Para o pôr do sol. Temos de esperar até a hora.
Na primeira você parecia estar tão surpreso. E então você riu de si
mesmo. Você me disse:– Eu estou sempre pensando que eu estou em casa!
Apenas assim. Todo mundo sabe que quando é meio-dia nos
Estados Unidos, o sol está se pondo sobre a França.
Se você pudesse voar para a França em um minuto, você poderia
ver o pôr do sol ao meio-dia.
Infelizmente, a França está muito longe para isso. Mas em seu
planeta minúsculo, meu pequeno príncipe, tudo que você precisa fazer é
mover sua cadeira alguns metros. Você pode ver o final do dia e o
crepúsculo caindo sempre que quiser..…– Um dia – você me disse – eu vi o pôr do sol quarenta e quatro
vezes!
E um pouco mais tarde que você adicionou:– Sabe, amamos o pôr do sol, quando estamos tristes…– Você estava triste, então? – Eu perguntei, – no dia dos quarenta e
quatro pores do sol?
Mas o principezinho não respondeu.`
    },
  7: {
        title: "Capítulo VII - A Rosa",
        content: `No quinto dia – mais uma vez, como sempre, graças às
ovelhas – esse segredo da vida do pequeno príncipe me foi
revelado. Ele perguntou abruptamente, sem preâmbulos, como fruto
de uma longa e silenciosa meditação acerca do um problema:– Se as ovelhas comem arbustos, elas comem flores,
também?– Uma ovelha, – eu respondi, – come qualquer coisa que se
encontre em seu alcance.– Mesmo que as flores têm espinhos?– Sim, até mesmo flores que têm espinhos.– Então os espinhos, para que são eles?
Eu não sabia. Naquele momento eu estava muito ocupado a
tentar desapertar um parafuso que tinha ficado preso no meu motor.
E eu estava muito preocupado, pois estava se tornando claro para
mim que a quebra do meu avião era extremamente séria. Além
disso, eu tinha tão pouca água potável que eu temia pelo pior.– Os espinhos, para que são eles?
O pequeno príncipe nunca deixaria passar uma pergunta, uma
vez que ele tivesse feito. Quanto a mim, eu estava chateado com
esse parafuso e respondi com a primeira coisa que me veio à
cabeça:– Os espinhos não servem para nada. São pura maldade das
flores!
– Oh!
Houve um momento de total silêncio. Em seguida, o pequeno
príncipe piscou de volta para mim, com um olhar meio ressentido:– Eu não acredito em você! As flores são criaturas frágeis. Eles
são ingênuas. Elas se tranquilizam da maneira que podem,
acreditando que seus espinhos são armas terríveis…
Eu não respondi. Naquele instante eu estava dizendo para
mim mesmo: “Se este parafuso não sair, eu vou demoli-lo com o
martelo”. Mais uma vez o pequeno príncipe perturbara meus
pensamentos:– E você realmente acredita que as flores…– Oh, não! – Gritei. – Não, não, não! Eu não acredito em nada.
Eu respondi-lhe com a primeira coisa que me veio à cabeça. Você
não vê? Estou muito ocupado com assuntos muito sérios!
Ele olhou para mim, atordoado.– Assuntos muito sérios!
Ele olhou para mim, com meu martelo em punho, os dedos
sujos com graxa de motor, curvando-me sobre um objeto que lhe
parecia extremamente feio…– Você fala como os adultos!
Isso 
me fez sentir vergonha. Mas ele continuou,
implacavelmente:– Você mistura tudo… Você confunde tudo…
Ele estava realmente muito irritado. Ele jogou seus cachos
dourados ao vento.
– Eu conheço um planeta onde há um certo cavalheiro com o
rosto vermelho. Ele nunca cheirou uma flor. Ele nunca olhou para
uma estrela. Ele nunca amou ninguém, nem nunca fez nada na vida
dele, a não ser somar números. E durante todo o dia, ele diz mais e
mais, assim como você: “Eu estou ocupado com assuntos muito
sérios”. E isso o faz inchar de orgulho. Mas ele não é um homem,
ele é um cogumelo!– Um o quê?– Um cogumelo!
Agora o pequeno príncipe estava pálido de raiva.– Há milhões de anos que as flores produzem espinhos. Há
milhões de anos que as ovelhas as comem apesar disso. E não é
uma questão de importância tentar entender por que as flores se
esforçam tão duramente para lhes crescerem espinhos que nunca
serão de alguma utilidade para elas? E a guerra entre as ovelhas e
as flores não é importante? Isso não é mais sério do que as somas
de um cavalheiro gordo de rosto vermelho? E se eu conheço uma
flor única no mundo, que não cresce em lugar algum, exceto no meu
planeta, mas que uma ovelhinha pode destruir em uma única
mordida numa manhã, sem se dar conta do que faz, não é
importante?
Ele corou, e depois continuou:– Se alguém ama uma flor, uma flor única a crescer entre
todas as milhões e milhões de estrelas, é o suficiente para fazê-lo
feliz só de olhar para as estrelas. Ele pode dizer a si mesmo: “Em
algum lugar, minha flor está lá…” Mas se o carneiro come a flor, em
um momento todas as suas estrelas ficarão obscurecidas… E você
acha que não é importante!
Ele não podia dizer mais nada. Suas palavras foram sufocadas
pelo seu choro.
A noite tinha caído e eu tinha largado as minhas ferramentas.
Eu não me importava mais com meu martelo, meu parafuso, ou a
sede, ou a morte? Em uma estrela, um planeta, o meu planeta, a
Terra, havia um pequeno príncipe a ser consolado. Levei-o em meus
braços, e o embalei. Eu disse a ele:– A flor que você ama não está em perigo. Eu vou fazer-lhe
uma mordaça para as suas ovelhas. Vou fazer uma cerca para
colocar em torno de sua flor. Eu vou…
Eu não sabia o que dizer a ele. Eu me sentia estranho e
desajeitado. Eu não sei como eu poderia alcançá-lo, como eu
poderia acompanhá-lo e seguir de mãos dadas com ele mais uma
vez.
É um lugar misterioso, a terra de lágrimas.`
    },
  8: {
        title: "Capítulo VIII - O Amor",
        content: `Logo comecei a conhecer melhor sobre esta flor. No planeta do
pequeno príncipe as flores sempre foram muito simples. Elas tinham
apenas um anel de pétalas; pegavam em qualquer lugar; elas não
eram um problema para ninguém; numa manhã apareceriam na
grama, e de noite elas tinham morrido pacificamente. Mas um dia, a
partir de uma semente soprada de ninguém sabia onde, uma nova
flor tinha chegado; e o pequeno príncipe tinha vigiado bem de perto
este pequeno broto que não era como qualquer outro dos pequenos
brotos em seu planeta. Poderia ter sido um novo tipo de baobá.
O arbusto logo parou de crescer, e começou a se preparar
para produzir uma flor. O pequeno príncipe, que estava presente na
primeira aparição de um enorme botão, sentiu de imediato que
algum tipo de aparição milagrosa deveria emergir dela. Mas a flor
não estava satisfeita para concluir os preparativos de sua beleza no
abrigo de seu quarto verde. Ela escolheu suas cores com o maior
cuidado. Ela vestiu-se lentamente, ajustando as pétalas uma por
uma. Ela não queria ir para o mundo toda amarrotada, como as
papoulas de campo. Ela só queria aparecer no pleno esplendor de
sua beleza. Oh, sim! Ela era uma criatura coquete! E seu misterioso
adorno durou por dias e dias.
Então, numa manhã, exatamente ao nascer do sol, de repente
ela se mostrou.
E, depois de trabalhar com toda essa precisão meticulosa, ela
bocejou e disse:
– Ah! Eu acabei de acordar. Peço-lhe que me perdoe. Minhas
pétalas ainda estão despenteadas…
Mas o principezinho não pôde conter sua admiração:– Oh! Como você é linda!– E não sou? – A flor respondeu, docemente. – E eu nasci no
mesmo momento em que o sol…
O pequeno príncipe adivinhava que ela não era muito modesta– mas ela era tão emocionante!– Eu acho que é hora do desjejum, – ela acrescentou um
instante depois. – Será que você teria a bondade de pensar em
mim…
E o pequeno príncipe, muito envergonhado, foi procurar um
regador de água doce. Então, ele servia a flor.
Assim, também, ela rapidamente começou a atormentá-lo com
sua vaidade – que era, verdade seja dita, um pouco difícil de lidar.
Um dia, por exemplo, quando ela estava falando de seus quatro
espinhos, ela disse para o pequeno príncipe:– Deixe os tigres virem com suas garras!– Não há tigres no meu planeta, – o pequeno príncipe objetou.– E, de qualquer maneira, os tigres não comem moita.– Eu não sou uma moita, – a flor respondeu, docemente.– Por favor, desculpe-me…
– Eu não estou com medo de tigres, – ela continuou, – mas eu
detesto correntes de ar. Será que você não teria uma tela para mim?– Um horror a correntes de ar, – que é má sorte, para uma
planta, – observou o pequeno príncipe, e acrescentou para si
mesmo: – Esta flor é uma criatura muito complicada…– À noite, eu quero que você me coloque sob um domo de
vidro. É muito frio onde você mora. No lugar do onde eu vim…
Mas ela interrompeu-se a esse ponto. Ela veio na forma de
uma semente. Ela não poderia ter conhecido quaisquer outros
mundos. Envergonhada por ter de deixado ser pega numa mentira
tão ingênua, ela tossiu duas ou três vezes para colocar o pequeno
príncipe no erro:– A tela?– Eu estava indo buscá-la quando você me disse…
Em seguida, ela forçou a tosse um pouco mais para que ele
sofresse de remorso de qualquer forma.
Então, o pequeno príncipe, apesar de toda a boa vontade
aliada ao seu amor, em breve veio a duvidar dela. Ele tinha tomado
a sério as palavras que foram sem importância, e isso o deixou
muito infeliz.– Eu não deveria tê-la escutado, – ele confidenciou-me um dia.– Nunca se deve escutar as flores.
Deve-se simplesmente olhar para elas e cheirar sua fragrância.
A minha perfumou todo o meu planeta. Mas eu não soube como ter
prazer em toda a sua graça. Este conto de garras, que me perturbou
tanto, só serviu para encher meu coração de ternura e compaixão.
E ele continuou suas confidências:– O fato é que eu não entendia nada! Eu deveria ter julgado
por atos e não por palavras. Ela lançou seu perfume e seu encanto
sobre mim. Eu nunca deveria ter corrido para longe dela… Eu devia
ter adivinhado todo o carinho que estava por trás daqueles seus
pobres estratagemas. As flores são tão inconstantes! Mas eu era
jovem demais para saber como a amá-la…`
    },
  9: {
        title: "Capítulo IX - A Partida",
        content: `Acredito que para a sua fuga, ele aproveitou a migração de um 
bando de aves selvagens. Na manhã do dia de sua partida, ele
colocou o planeta em perfeita ordem e limpou cuidadosamente seus
vulcões ativos. Ora, ele possuía dois vulcões ativos; e estes eram
muito convenientes para aquecer seu café da manhã. Ele também
tinha um vulcão que se extinguira. Mas, como ele disse: “Nunca se
sabe!” Então, ele limpou o vulcão extinto, também. Se eles estiverem
bem limpos, os vulcões queimam lentamente e de forma constante,
sem erupções. Erupções vulcânicas são como incêndios em uma
chaminé. No nosso mundo somos obviamente pequenos demais
para limpar nossos vulcões. É por isso que eles nos causam
problemas.
O pequeno príncipe também arrancou, com certa sensação de
desânimo, os últimos pequenos brotos dos baobás. Ele acreditava
que nunca iria querer voltar. Mas nesta última manhã todas estas
tarefas familiares pareciam muito preciosas para ele. E quando ele
regou a flor pela última vez, e preparou-se para colocá-la sob o
abrigo do seu domo de vidro, percebeu que estava a ponto de
chorar.– Adeus, – disse ele à flor.
Mas ela não respondeu.– Adeus, – disse ele novamente.
A flor tossiu. Mas não era porque ela tinha um resfriado.– Eu fui boba, – ela lhe disse, por fim. – Eu peço perdão. Tente
ser feliz…
Ele foi surpreendido por esta ausência de censuras. Ele ficou lá
perplexo, segurando o domo de vidro no ar. Ele não entendia essa
doçura tranquila.– É claro que eu te amo, – disse a flor para ele. – É minha
culpa, você não sabe de nada. Não importa. Mas você tem sido tão
tolo quanto eu. Tente ser feliz… Deixe o globo de vidro. Eu não quero
mais isso.– Mas o vento…– O frio não é tão ruim… O ar fresco da noite me fará bem. Eu
sou uma flor.– Mas os animais…– Bem, tenho de suportar a presença de duas ou três lagartas
se eu quiser ter a companhia de borboletas. Parece que elas são
muito bonitas. E, se forem as borboletas (e as lagartas) quem me
visitará? Você estará longe… Quanto aos animais maiores, eu não
temo qualquer um deles, pois tenho minhas garras.
E, ingenuamente, ela mostrou seus quatro espinhos. Depois
acrescentou:– Não demoremos com isto. Você decidiu ir embora. Agora vá!
Pois ela não queria que ele a visse chorar. Ela era uma flor
muito orgulhosa…`
    },
    10: {
        title: "Capítulo X - O Rei",
        content: `Ele encontrou-se no bairro dos asteroides 325, 326, 32 , 32 ,
329, e 330. Começou, portanto, a visitá-los, a fim de aumentar seu
conhecimento.
O primeiro deles era habitado por um rei. Vestido de púrpura e
arminho real, ele estava sentado em um trono que era ao mesmo
tempo simples e majestoso.– Ah! Este é um sujeito, disse o rei, quando viu o pequeno
príncipe.
E o pequeno príncipe perguntou a si mesmo:
– Como ele poderia me reconhecer se nunca tinha me visto
antes?
Ele não sabia como o mundo é simplificado para os reis. Para
eles, todos os homens são sujeitos.– Aproxime-se, para que eu possa vê-lo melhor, – disse o rei,
que sentiu muito orgulhoso de ser finalmente um rei sobre alguém.
O pequeno príncipe olhou em todos os lugares para encontrar
um lugar para sentar-se; mas todo o planeta estava ocupado pelo
magnífico manto de arminho do rei. Assim, ele se manteve de pé, e,
uma vez que ele estava cansado, ele bocejou.– É contra a etiqueta bocejar na presença de um rei, – disse o
monarca a ele. – Eu o proíbo de fazê-lo.– Eu não posso evitar, – respondeu o principezinho, muito
envergonhado. – Fiz uma longa viagem e não dormi…– Então, – disse o rei, – eu lhe ordeno que boceje. Eu não vi
ninguém bocejar durante anos. Bocejos são para mim objetos de
curiosidade. Venha! Boceje de novo. É uma ordem.– Isso me assusta… Eu não posso... – murmurou o pequeno
príncipe, corando de vergonha.– Hum! Hum! – respondeu o rei. – Então eu… eu te ordeno,
por vezes, a bocejar e às vezes a…
Ele gaguejou um pouco, e parecia vexado. Pois o rei
fundamentalmente insistia que a sua autoridade devia ser
respeitada. Não tolerava desobediência. Ele era um monarca
absoluto. Mas, porque ele era um homem muito bom, ele fez suas
ordens razoáveis.
– Se eu pedir a um general, – ele dizia, a título de exemplo, 
se eu pedir um general para transformar-se em um pássaro do mar,
e o general não me obedecesse, isso não seria culpa do general.
Seria minha culpa.– Posso me sentar? – Timidamente perguntou o pequeno
príncipe.– 
Eu ordeno a você fazê-lo, – respondeu o rei, e
majestosamente arrumou uma dobra de seu manto de arminho.
Mas o pequeno príncipe queria saber… O planeta era
minúsculo. Sobre o que poderia este rei realmente governar?– Sire, – ele disse-lhe. – Peço que me desculpe por fazer-lhe
uma pergunta…– Eu ordeno que me pergunte, – o rei apressou-se em dizer.– Sire, sobre o que você governa?– Sobre tudo, – disse o rei, com uma magnífica simplicidade.– Sobre tudo?
O rei fez um gesto, incluindo o seu planeta, os outros planetas,
e todas as estrelas.– Sobre tudo isso? – perguntou o principezinho.– Sobre tudo isso, – respondeu o rei.
Pois seu governo não era apenas absoluto: ele também era
universal.– E as estrelas o obedecem?– Certamente que o fazem, – disse o rei. – Elas obedecem
imediatamente. Eu não permito insubordinação.
Tal poder surpreendeu o pequeno príncipe. Se ele tivesse tal
autoridade completa, ele teria sido capaz de ver o pôr do sol, não
quarenta e quatro vezes em um dia, mas setenta e duas, ou até
mesmo uma centena, ou mesmo duzentas vezes no mesmo dia,
sem nunca ter de mover sua cadeira! E como ele se sentia um
pouco triste por causa da lembrança de seu pequeno planeta
abandonado, ele reuniu toda a sua coragem para pedir ao rei um
favor:– Eu gostaria de ver um pôr do sol… Faça-me essa bondade…
Solicite ao sol para se pôr…– Se eu pedir que general voe de uma flor a outra como uma
borboleta, ou escreva uma tragédia, ou se transforme em um
pássaro de mar, e o general não executar a ordem recebida, qual de
nós estaria errado? Eu ou ele?– Seria você, – disse o principezinho, com firmeza.– Certo. Devemos exigir de cada um o que cada um pode
fazer, – disse o rei. – A autoridade é baseada principalmente na
razão. Se você ordenar que seu povo se atire ao mar, ele vai fazer a
revolução. Eu tenho o direito de exigir obediência porque minhas
ordens são razoáveis.– Então, e meu pôr do sol? – Lembrou o principezinho, que
nunca esquecia uma pergunta que tivesse feito.– Você terá seu pôr do sol. Vou ordená-lo, mas, de acordo com
a minha ciência do governo, vou esperar até que as condições são
favoráveis.
– Quando será isso? – perguntou o principezinho.– Hum! Hum! – respondeu o rei; e antes de dizer qualquer
outra coisa que ele consultou um almanaque volumoso. – Hum!
Hum! Isso será cerca de… aproximadamente… será esta noite por
volta das h 40min. E você verá o quão bem eu serei obedecido!
O pequeno príncipe bocejou. Ele estava lamentando seu pôr
do sol perdido. E então, também, já estava começando a ficar um
pouco entediado.– Não tenho mais nada para fazer aqui, – disse ele ao rei. 
Então, eu vou retomar meu caminho.– Não vá, – disse o rei, que estava muito orgulhoso de ter um
súdito. – Não vá embora. Eu vou fazer de você um ministro!– O ministro de quê?– Ministro da Justiça!– Mas não há ninguém aqui para julgar!– Nós não sabemos disso, – disse o rei a ele. – Eu ainda não
percorri todo o meu reino. Estou muito velho. Não há espaço aqui
para uma carruagem e cansa-me a andar.– Ah, mas eu já olhei já! – Disse o principezinho, virando-se
para dar mais uma olhada no outro lado do planeta. Daquele lado,
como neste, não há ninguém em lugar algum…– Então você deve julgar a si mesmo, – respondeu o rei. – Isso
é a coisa mais difícil de todas. É muito mais difícil de julgar a si
mesmo que julgar os outros. Se você conseguir julgar a si mesmo,
com justiça, então você é realmente um homem de verdadeira
sabedoria.
– Sim, – disse o pequeno príncipe, – mas eu posso julgar a
mim mesmo em qualquer lugar. Eu não preciso viver neste planeta.– Hum! Hum! – Disse o rei. – Eu tenho boas razões para
acreditar que em algum lugar no meu planeta há um velho rato. Eu o
ouvi à noite. Você pode julgar este velho rato. De vez em quando
você vai condená-lo à morte. Assim, sua vida vai depender da sua
justiça. Mas você vai perdoá-lo em cada ocasião, já que ele deve
ser tratado de forma racional. É o único que temos.– Não me agrada condenar ninguém à morte, – respondeu o
pequeno príncipe. – E agora eu acho que vou seguir o meu
caminho.– Não, – disse o rei.
Mas o principezinho, já tendo completado os preparativos para
a partida, não desejava afligir o velho monarca.– Se Vossa Majestade deseja ser prontamente obedecido, 
ele disse, – deve ser capaz de me dar uma ordem razoável. Ele
deve ser capaz, por exemplo, de pedir-me para ir embora daqui a
um minuto. Parece-me que as condições são favoráveis…
Como o rei não deu resposta, o pequeno príncipe hesitou por
um momento. Então, com um suspiro, ele se despediu.– Eu te faço meu embaixador, – o rei chamou, às pressas.
Ele tinha um magnífico ar de autoridade.– Os adultos são muito estranhos, – disse o principezinho para
si mesmo, quando ele continuou sua jornada.`
    },
    11: {
        title: "Capítulo XI - O Vaidoso",
        content: `O segundo planeta era habitado por um homem vaidoso.– Ah! Ah! Estou prestes a
receber uma visita de um admirador! – Exclamou de longe, quando
viu pela primeira vez o pequeno príncipe que chegava....
Pois, para homens vaidosos, todos os outros homens são seus
admiradores.– Bom dia, – disse o principezinho. – É um chapéu estranho o
que você está usando.
– É um chapéu para saudações, – o homem vaidoso
respondeu. – É para levantar em saudação quando me aclamam.
Infelizmente, quase ninguém passa por aqui.– Sério? – Disse o principezinho, que não entendia o que o
vaidoso estava falando.– Bata as palmas de suas mãos uma na outra, – o vaidoso
agora sugeriu a ele.
O principezinho bateu palmas. O homem vaidoso tirou o
chapéu em uma saudação modesta.– Este é mais divertido do que o rei que visitei, – disse o
principezinho para si mesmo. E ele começou de novo a bater as
palmas, uma contra a outra. O homem vaidoso voltou a levantar o
chapéu em saudação.
Após cinco minutos de exercício, o príncipe se cansou da
monotonia do jogo.– E o que se deve fazer para fazer o chapéu descer? – Ele
perguntou.
Mas o vaidoso não ouviu. Pessoas vaidosas nunca ouvem
nada, apenas a ovação.– Você realmente me admira muito? – Ele exigiu do pequeno
príncipe.– O que isso significa, “admirar”?– Ora, admirar significa que você me considera como o mais
belo, o mais bem vestido, o mais rico, e o homem mais inteligente
do planeta.– Mas você é o único homem em seu planeta!
– Dê-me este prazer. Admire-me de qualquer maneira.– Eu admiro você, – disse o principezinho, encolhendo os
ombros levemente, – mas por que isso te importa tanto?
E o pequeno príncipe foi embora.– Os adultos são, certamente, muito estranhos, – ele disse
consigo mesmo, e continuou sua jornada.`
    },
    12: {
        title: "Capítulo XII - O Bêbado",
        content: `O próximo planeta era habitado por um beberrão. Esta foi uma
visita muito curta, mas mergulhou o pequeno príncipe num profundo
desânimo.– O que você está fazendo aí? – disse ao ébrio, a quem ele
encontrou sentado em silêncio diante de uma coleção de garrafas
vazias e também uma coleção de garrafas cheias.– Eu bebo, – respondeu o beberrão, com ar lúgubre.– Por que você bebe? – Perguntou o principezinho.– Para que eu possa esquecer, – respondeu o beberrão.– Esquecer o que? – Perguntou o principezinho, que já estava
com pena dele.
– Esquecer minha vergonha, – o bêbado confessou, de cabeça
baixa.– Vergonha de quê? – insistiu o principezinho, que queria
ajudá-lo.– Vergonha de beber! – O ébrio finalizou seu discurso, e
encerrou-se num silêncio inexpugnável.
E o pequeno príncipe foi embora, perplexo.– Os adultos são certamente muito, muito estranhos, – disse
para si mesmo, e continuou sua jornada.`
    },
    13: {
        title: "Capítulo XIII - O Homem De Negócios",
        content: `O quarto planeta pertencia a um empresário. Este homem
estava tão ocupado que sequer levantou a cabeça à chegada do
pequeno príncipe.– Bom dia, – disse o principezinho para ele. – O seu cigarro se
apagou.– Três e dois são cinco. Cinco e sete, doze. Doze e três fazem
quinze. Bom dia. Quinze e sete, vinte e dois. Vinte e dois e seis,
vinte e oito. Eu não tenho tempo para acendê-lo outra vez.
Vinte e seis e cinco fazem trinta e um. Ufa! Então são
quinhentos e um milhões, seiscentos e vinte e dois mil, setecentos
trinta e um.– Quinhentos milhões de quê? – perguntou o principezinho.– Hein? Você ainda está aí? Quinhentos e um milhões?… Eu
não posso parar, tenho muito trabalho a fazer. Estou preocupado
com coisas sérias e não posso me distrair com bobagens!… Dois e
cinco são sete…– Quinhentos e um milhões de quê? – Repetiu o principezinho,
que nunca em sua vida tinha abandonado uma pergunta, uma vez
que a tivesse feito.
O empresário levantou a cabeça.– Durante os 54 anos em que eu habitei este planeta, fui
perturbado apenas três vezes. A primeira vez foi 22 anos atrás,
quando um besouro vertiginoso caiu de sabe-se lá onde. Ele fazia o
ruído mais terrível que ressoava em todo o lugar, e eu cometi quatro
erros nos meus cálculos por causa disso. Na segunda vez, 11 anos
atrás, eu fui perturbado por um ataque de reumatismo. Eu não faço
exercícios físicos o suficiente, pois não tenho tempo para ficar
vadiando. E a terceira vez… é esta aqui! Eu estava dizendo, então,
quinhentos e um milhões…– Milhões de quê?
O empresário de repente percebeu que não havia esperança
de apaziguar o menino.– Milhões dessas pequenas coisas que às vezes vemos no
céu.– Moscas?– Não, as pequenas coisas que brilham.– Abelhas?– Oh, não. Os pequenos objetos dourados fazem os homens
preguiçosos sonharem acordados. Quanto a mim, estou preocupado
com questões sérias. Não tenho tempo para sonhar.
– Ah! Você quer dizer que as estrelas?– Sim, é isso. As estrelas.– E o que você faz com quinhentos milhões de estrelas?– Quinhentos e um milhões, seiscentos e vinte e dois mil,
setecentos e trinta e uma. Estou falando sério: Eu sou preciso.– E o que você faz com essas estrelas?– O que eu faço com elas?– Sim.– Nada. Eu as possuo.– Você possui as estrelas?– Sim.– Mas eu já vi um rei que…– Reis não possuem, eles reinam sobre. É uma questão muito
diferente.– E que bem lhe faz você possuir as estrelas?– Isso me faz o bem de me fazer rico.– E que bem lhe faz você ser rico?– Isso torna possível que eu compre mais estrelas, se algum
dia forem descobertas.– Este homem, – o pequeno príncipe disse para si mesmo, 
raciocina um pouco como o meu pobre bêbado…
No entanto, ele ainda tinha mais algumas perguntas.– Como é possível a alguém possuir as estrelas?– E quem é esse alguém? – O empresário respondeu, irritado.– Eu não sei. Ninguém.
– Ora, elas pertencem a mim, porque eu fui a primeira pessoa a
pensar nisso.– Só por isso?– Certamente. Se você encontrar um diamante que não pertence a
ninguém, é seu. Quando você descobre uma ilha que não pertence
a ninguém, é sua. Quando você tem uma ideia, antes de qualquer
outra pessoa, você registra uma patente sobre ela… É sua. Então,
quanto a mim, eu possuo as estrelas porque ninguém antes de mim
já pensou em possuí-las.– Sim, isso é verdade, – disse o principezinho. – E o que você faz
com elas?– Eu as administro, – respondeu o empresário. – Eu as conto e
torno a contar. É difícil. Mas eu sou um homem que é, naturalmente,
interessado em questões sérias.
O principezinho ainda não estava satisfeito.– Se eu possuísse um lenço de seda, – disse ele, – eu poderia
colocá-lo em volta do meu pescoço e levá-lo comigo. Se eu
possuísse uma flor, eu poderia arrancar essa flor e levá-la comigo.
Mas você não pode arrancar as estrelas do céu…– Não. Mas eu posso colocá-las no banco.– O que quer dizer com isso?– Isso significa que eu escrevo o número de minhas estrelas em um
pequeno papel. E então eu coloco esse papel em uma gaveta e o
tranco com uma chave.– E isso é tudo?– Isso é o suficiente, – disse o empresário.– É divertido, – pensou o principezinho. – É bastante poético. Mas
não é de grande importância.
Em assuntos sérios, o pequeno príncipe tinha ideias que eram muito
diferentes daquelas dos adultos.– Eu mesmo possuo uma flor, – ele continuou sua conversa com o
empresário, – que eu rego todos os dias, eu possuo três vulcões,
que eu limpo a cada semana. (Porque eu também limpo o que é
extinto; nunca se sabe). Me são de alguma utilidade os meus
vulcões, e me é útil a minha flor; por isso eu os possuo. Mas você
não tem nenhuma utilidade para as estrelas…
O empresário abriu a boca, mas não encontrou nada para dizer em
resposta. E o pequeno príncipe foi embora.– 
Os adultos são realmente extraordinários, – ele disse
simplesmente, falando para si mesmo, enquanto continuava a sua
jornada.`
    },
    14: {
        title: "Capítulo XIV - O Acendedor De Lampiões",
        content: `O quinto planeta era muito estranho. Foi o menor de todos.
Havia espaço apenas o suficiente sobre ele para uma lâmpada de
rua e um acendedor. O pequeno príncipe não foi capaz de chegar a
qualquer explicação sobre o uso de uma lâmpada de rua e um
acendedor, em algum lugar no céu, em um planeta que não tinha
pessoas nem casas. Mas ele disse para si mesmo, no entanto:– Este homem é um absurdo. Mas ele não é tão absurdo como
o rei, o vaidoso, o empresário, e o beberrão. Pelo menos o seu
trabalho tem algum significado. Quando ele acende o lampião, é
como se trouxesse mais uma estrela à vida, ou uma flor. Quando ele
apaga seu candeeiro, ele desperta a flor, ou põe a estrela para
dormir. Isso é uma ocupação bonita. E já que é bonita, é
verdadeiramente útil.
Quando ele chegou ao planeta, ele saudou respeitosamente o
acendedor.– Bom dia. Por que você acabou de apagar o lampião?– Essas são as ordens, – respondeu o acendedor. – Bom dia.– Quais são as ordens?– As ordens são de que eu apague o meu lume. Boa noite.
E ele acendeu o candeeiro novamente.– Mas por que você o acendeu de novo?– Essas são as ordens, – respondeu o acendedor.– Eu não entendo, – disse o principezinho.– Não há nada para entender, – disse o acendedor. – Ordens
são ordens. Bom dia.
E ele apagou o lampião.
Então ele enxugou a testa com um lenço decorado com
quadrados vermelhos.– Eu tenho uma profissão terrível. Nos velhos tempos, era
razoável. Eu apagava o lume pela manhã, e à noite o acendia
novamente. Eu tinha o resto do dia para relaxar e o resto da noite
para dormir.– E as ordens foram alteradas desde esse tempo?– As ordens não foram alteradas, – disse o acendedor. – Essa
é a tragédia! De ano para ano, o planeta se tornou mais rápido e as
ordens não foram alteradas!– Então o quê? – Perguntou o principezinho.– Então, o planeta agora faz uma volta completa a cada
minuto, e eu já não tenho um único segundo de repouso. A cada
minuto tenho que acender a minha lâmpada e apagá-la novamente!– Isso é muito engraçado! Um dia dura apenas um minuto,
aqui onde você vive!– Isso não é engraçado! – Disse o acendedor. – Enquanto
conversávamos um mês se passou.– Um mês?– Sim, um mês. Trinta minutos. Trinta dias. Boa noite.
E ele acendeu o candeeiro novamente.
Enquanto o pequeno príncipe o observava, ele sentiu afeição
por este acendedor que era tão fiel às suas ordens. Lembrou-se do
pôr do sol que ele mesmo tinha buscado, em outros dias,
simplesmente deslocando sua cadeira; e ele queria ajudar seu
amigo.– Você sabe, – disse ele, – eu posso te dizer uma maneira
para você poder descansar sempre que quiser…– Eu sempre quero descansar, – disse o acendedor.– Pois é possível para um homem ser fiel e preguiçoso, ao
mesmo tempo.
O pequeno príncipe continuou com sua explicação:– Seu planeta é tão pequeno que três passos irão levá-lo todo
o caminho em torno dele para estar sempre sob a luz do sol. Você
só precisa caminhar muito lentamente. Quando você quer
descansar, você vai andar e o dia vai durar tanto quanto você quiser.– Isso não me fará muito bem, – disse o acendedor. – A única
coisa que eu amo na vida é dormir.– Então você está sem sorte, – disse o principezinho.– Eu sou azarado, – disse o acendedor. – Bom dia.
E ele estendeu a sua lâmpada.– Este homem, – disse o principezinho para si mesmo,
enquanto ele seguia em frente em sua jornada, – seria desprezado
por todos os outros: pelo rei, pelo homem vaidoso, pelo beberrão e
pelo empresário. No entanto, ele é o único dentre eles que não me
parece ridículo. Talvez seja porque ele está pensando em outra
coisa além de si mesmo.
Ele deu um suspiro de pesar, e disse para si mesmo, mais uma
vez:
– Esse homem é o único de todos eles que poderia ter sido
meu amigo. Mas seu planeta é realmente muito pequeno. Não há
lugar nele para duas pessoas…
O que o pequeno príncipe não ousava confessar era que ele
estava arrependido de sair do planeta, acima de tudo, porque era
abençoado a cada dia com 1.440 pores do sol!`
    },
    15: {
        title: "Capítulo XV - O Geógrafo",
        content: `O sexto planeta era dez vezes maior do que o último. Era habitado
por um ancião que escrevia um livro volumoso.– Oh, vejam só! É um explorador! – Ele exclamou para si
mesmo quando viu o pequeno príncipe que vinha.
O pequeno príncipe sentou-se à mesa um pouco ofegante. Ele
já tinha viajado tanto e tão longe!– De onde você vem? – O ancião lhe perguntou.– O que é este grande livro? – Disse o principezinho. – O que
você está fazendo?– Eu sou um geógrafo, – disse o velho.– O que é um geógrafo? – Perguntou o principezinho.– Um geógrafo é um estudioso da localização de todos os
mares, rios, cidades, montanhas e desertos.
– Isso é muito interessante, – disse o principezinho. – Eis,
finalmente, um homem que tem uma profissão de verdade! E ele
lançou um olhar ao seu redor no planeta do geógrafo. Este era o
mais magnífico e imponente planeta que ele já tinha visto.– Seu planeta é muito bonito, – disse ele. – Ele tem um
oceano?– Eu não poderia te dizer, – respondeu o geógrafo.– Ah! – O principezinho estava decepcionado. – Tem quaisquer
montanhas?– Eu não poderia te dizer, – disse o geógrafo.– E as cidades, e rios e desertos?– Eu não poderia dizer-lhe sobre qualquer um.– Mas você é um geógrafo!– Exatamente, – disse o geógrafo. – Mas eu não sou um
explorador. Eu não tenho um único explorador no meu planeta. Não
é o geógrafo que sai para contar as cidades, os rios, as montanhas,
os mares, os oceanos, e os desertos. O geógrafo é importante
demais para ir vagando por aí. Ele não deixa a sua mesa. Mas ele
recebe os exploradores em seu estudo. Ele lhes faz perguntas e
anota o que lembram de suas viagens. E se as lembranças de
qualquer um entre eles lhe parece interessante, o geógrafo ordena
uma investigação sobre o caráter moral daquele explorador.– E por que isso?– Porque um explorador que mentisse seria desastroso para
os livros do geógrafo. Ou então se fosse um explorador que
bebesse demais.
– Por quê? – Perguntou o principezinho.– Porque os homens embriagados veem o dobro. Então o
geógrafo anotaria duas montanhas em um lugar onde só havia uma.– Eu sei de um, – disse o pequeno príncipe, – que seria um
mau explorador.– Isso é possível. Então, quando o caráter moral do explorador
se mostra bom, um inquérito é aberto sobre sua descoberta.– Um vão até lá para ver?– Não. Isso seria muito complicado. Mas se requer ao
explorador que forneça provas. Por exemplo, se a descoberta em
questão é a de uma grande montanha, se requer que grandes
pedras sejam trazidas de lá por ele.
O geógrafo foi subitamente agitado por uma excitação.– Mas você, você vem de longe Você é um explorador Você
deve descrever seu planeta para mim!!!
E, depois de ter aberto o seu grande livro de registo, o
geógrafo apontou o seu lápis. As considerações de exploradores
são colocadas primeiro a lápis. Então se espera até que o
explorador tenha fornecido provas, para colocá-las em tinta.– Bem? – Disse o geógrafo com expectativa.– Oh, onde eu vivo, – disse o pequeno príncipe, – não é muito
interessante. É tudo tão pequeno. Eu tenho três vulcões. Dois
vulcões estão ativos e o outro é extinto. Mas nunca se sabe.– Nunca se sabe, – concordou o geógrafo.– Eu também tenho uma flor.
– Nós não anotamos as flores, – disse o geógrafo.– Por que isso? A flor é a coisa mais linda no meu planeta!– Nós não as registramos, – disse o geógrafo, – porque elas
são efêmeras.– O que isso significa: efêmera?– Geografias, – disse o geógrafo, – são os livros que, de todos
os livros, estão mais preocupados com questões sérias. Eles nunca
se tornam desatualizados. É muito raro que uma montanha mude
sua posição. É muito raro que um oceano se esvazie de suas
águas. Nós escrevemos das coisas permanentes.– Mas vulcões extintos podem voltar à vida, – o pequeno
príncipe interrompeu. – Que quer dizer efêmera?– Os vulcões que estejam extintos ou ativos, tratam-se da
mesma coisa para nós, – disse o geógrafo. – A única coisa que
importa para nós é a montanha. Isso não muda.– 
Mas o que isso significa? Efêmera? – Repetiu o
principezinho, que nunca em sua vida tinha abandonado uma
pergunta, uma vez que a tivesse feito.– Significa, que corre o risco de desaparecer subitamente.– E a minha flor corre perigo de desaparecer rápido?– Certamente que sim.– Minha flor é efêmera, – o pequeno príncipe disse para si
mesmo, – e ela tem apenas quatro espinhos para se defender
contra o mundo. E eu a deixei no meu planeta, completamente
sozinha!
Esse foi o seu primeiro momento de pesar. Mas ele tomou
coragem mais uma vez.– Que lugar você me aconselha a visitar agora? – Ele
perguntou.– O planeta Terra, – respondeu o geógrafo. – Ele tem uma boa
reputação.
E o pequeno príncipe foi embora, pensando em sua flor.`
    },
    16: {
        title: "Capítulo XVI - A Terra",
        content: `Então o sétimo planeta era a Terra.
A Terra não é um planeta comum! Pode-se contar, lá, 111 reis
(não esquecendo, é claro, os reis africanos), .000 geógrafos, 900
mil 
empresários, .500.000 beberrões, 311.000.000 homens
vaidosos, ou seja, cerca de 2 bilhões de adultos.
Para se ter uma ideia do tamanho da Terra, vou dizer-lhe que,
antes da invenção da eletricidade, era necessário manter, ao longo
de todo os seis continentes, um verdadeiro exército de 462.511
acendedores para os lampiões de rua.
Visto de uma pequena distância, faria um espetáculo
magnífico. Os movimentos desse exército seriam regulados como
os do balé na ópera. Primeiro seria a vez dos acendedores de
lampiões da Nova Zelândia e Austrália. Depois de acenderem suas
lâmpadas, estes se recolheriam para dormir. Em seguida, os
acendedores de lampiões da China e da Sibéria entrariam com os
seus passos na dança, e, em seguida, eles também se retirariam de
volta para os bastidores. Depois seria a vez dos acendedores de
lampiões da Rússia e das Índias; em seguida, os da África e da
Europa; na sequência, os da América do Sul; e então os da América
do Norte. E nunca cometeriam um erro na ordem de sua entrada no
palco. Seria magnífico.
Só o homem que estava no comando da única lâmpada no
Polo Norte, e seu colega que fosse responsável pela única lâmpada
no Polo Sul, somente estes dois viveriam livres da labuta e cuidado:
eles só se ocupariam duas vezes por ano.`
    },
    17: {
        title: "Capítulo XVII - A Serpente",
        content: `Quando queremos ser espirituoso, às vezes mentimos um
pouco. Eu não fui totalmente honesto no que eu disse a você sobre
os acendedores. E eu percebo que eu corro o risco de dar uma falsa
ideia de nosso planeta para aqueles que não sabem disso. Os
homens ocupam um área muito pequena sobre a Terra. Se os dois
bilhões de habitantes adultos de sua superfície ficassem todos de
pé bem juntos, como se fizessem parte de alguma grande
assembleia pública, eles poderiam facilmente ser colocados em uma
praça com 20 milhas de comprimento e 20 milhas de largura. Toda a
humanidade poderia ser amontoada em uma pequena ilhota do
Pacífico.
Os adultos, com certeza, não vão acreditar em você quando
você lhes disser isso. Eles imaginam que preenchem um grande
espaço. Eles se imaginam tão importantes como os baobás. Você
deve aconselhá-los, então, a fazerem seus próprios cálculos. Eles
adoram números, isso vai agradá-los. Mas não perca seu tempo
com esta tarefa extra. É desnecessária. Você tem, eu sei, a
confiança em mim.
Quando o príncipe chegou à Terra, ele estava muito surpreso
por não ver qualquer pessoa. Ele estava começando a ficar com
medo de que tivesse vindo para o planeta errado, quando uma
serpente retorcida, da cor do luar, atravessou a areia.
– Boa noite, – disse o pequeno príncipe com cortesia.– Boa noite, – disse a serpente.– Que planeta é este em que eu desci? – Perguntou o
principezinho.– Esta é a África, no planeta Terra, – a cobra respondeu.– Ah! Então não há pessoas na Terra?– Este é o deserto. Não há pessoas no deserto. A Terra é
grande, – disse a serpente.
O pequeno príncipe se sentou em uma pedra, e ergueu os
olhos para o céu.– Eu me pergunto, – disse ele, – se as estrelas se acendem no
céu para que um dia cada um de nós possa encontrar o seu próprio
lugar novamente… Olhe para o meu planeta. É bem ali acima de
nós. Mas como é longe!
– É lindo, – disse a serpente. – O que te trouxe aqui?– Eu tenho tido alguns problemas com uma flor, – disse o
principezinho.– Ah! – Disse a serpente.
E ambos ficaram em silêncio.– Onde estão os homens? – O pequeno príncipe finalmente
retomou a conversa novamente. – É um pouco solitário no deserto…– Também é solitário entre os homens, – Disse a serpente.
O pequeno príncipe olhou para ela por um longo tempo.– Você é um animal engraçado, – disse ele, por fim. – Você
não é mais espesso do que um dedo…– Mas eu sou mais poderosa do que o dedo de um rei, – disse
a serpente.
O pequeno príncipe sorriu.– Você não é muito poderosa. Você nem mesmo tem pés.
Você não pode sequer viajar…
– Eu posso levá-lo mais longe do que qualquer navio poderia
levá-lo, – disse a serpente.
Ela enroscou-se no tornozelo do pequeno príncipe, como um
bracelete de ouro.– Aquele que eu toco, eu mando de volta para a terra de onde
ele veio, – a serpente falou novamente. – Mas você é inocente e
verdadeiro, e você vem de uma estrela…
O principezinho não respondeu.– Você me leva à piedade; você é tão fraco nesta Terra dura
como pedra, – disse a serpente. – Eu posso ajudá-lo, algum dia, se
você sentir muitas saudades de seu próprio planeta. Eu posso…– Oh! Eu entendo, – disse o principezinho. – Mas por que você
sempre fala em enigmas?– Eu os resolvo todos, – disse a serpente.
E ambos estavam em silêncio.`
    },
    18: {
        title: "Capítulo XVIII - A Flor",
        content: `O pequeno príncipe atravessou o deserto e encontrou-se com
apenas uma flor. Era uma flor com três pétalas, uma florzinha de
nada…– Bom dia, – disse o principezinho.– Bom dia, – disse a flor.– Onde estão os homens? – O pequeno príncipe perguntou,
educadamente.
A flor tinha visto uma caravana que passara.– Os homens? – Repetiu ela. – Eu acho que há seis ou sete
deles. Eu os vi, há alguns anos. Mas não saberia onde encontrá-los.
O vento sopra sobre eles. Eles não têm raízes, e isso faz com que a
sua vida seja muito difícil.– Adeus, – disse o principezinho.– Adeus, – disse a flor.
`
    },
    19: {
        title: "Capítulo XIX - A Montanha",
        content: `Depois disso, o pequeno príncipe escalou uma montanha alta.
As únicas montanhas que já conhecera eram os seus três vulcões,
que lhe subiam até os joelhos. E ele usava o vulcão extinto como
um banquinho. – De uma montanha tão alta como esta, – disse para
si mesmo: – Eu serei capaz de ver todo o planeta de uma só vez, e
todas as pessoas…
Mas ele não viu nada, senão picos de rochosos afiados como
agulhas.– Bom dia, – disse ele com cortesia.
– Bom dia… Bom dia… Bom dia, – respondeu o eco.– Quem é você? – Disse o principezinho.– Quem é você… Quem é você… Quem é você? – Respondeu
o eco.– Sejam meus amigos. Estou sozinho, – disse ele.– Estou sozinho… sozinho… sozinho, – respondeu o eco.– Mas que planeta estranho! – Ele pensou. – É completamente
seco, e todo pontiagudo, e tão severo e proibitivo. E as pessoas não
têm imaginação. Elas só repetem o que se diz a elas. No meu
planeta eu tinha uma flor… Ela sempre era a primeira a falar…
`
    },
    20: {
        title: "Capítulo XX - As Rosas",
        content: `Mas aconteceu que depois de caminhar por um longo tempo
através de areia e rochas, e neve, o pequeno príncipe finalmente
encontrou uma estrada. E todos os caminhos levam aos homens.– Olá, – disse ele.
Ele estava diante de um jardim de rosas.– Olá, – responderam as rosas.
O pequeno príncipe olhou para elas. Todas se pareciam com a
sua flor.– Quem são vocês? – Ele exigiu, estupefato.– Somos rosas, – disseram as flores.
E ele foi tomado pela tristeza. Sua flor lhe havia dito que ela
era a única de sua espécie em todo o universo. E aqui haviam cinco
mil delas, todas iguais, em um único jardim!
– Ela ficaria muito aborrecida, se visse isso… – Disse ele a si
mesmo. – Ela iria tossir terrivelmente, e fingir que estava morrendo,
para evitar ser ridicularizada. E eu seria obrigado a fingir cuidar dela,
porque, se eu não fizesse isso, me humilhando, ela realmente se
permitiria morrer…
Em seguida, ele continuou com suas reflexões: – Eu pensei
que eu era rico, com uma flor que era única em todo o mundo, e
tudo que eu tinha era uma flor comum. Uma rosa comum, e três
vulcões que vêm até meus joelhos. E um deles, talvez, extinto para
sempre… Isso não faz de mim um príncipe muito real…
E deitou-se na grama e chorou.`
    },
    21: {
        title: "Capítulo XXI - A Raposa",
        content: `Foi então que apareceu a raposa.– Bom dia, – disse a raposa.– Bom dia, – o pequeno príncipe respondeu educadamente,
embora quando se virou, ele não tenha visto ninguém.– Eu estou bem aqui, – disse a voz, – debaixo da macieira.– Quem é você? – Perguntou o principezinho, e acrescentou: 
Você é muito bonita.– Eu sou uma raposa, – respondeu ela.– Vem brincar comigo, – propôs o principezinho. – Eu estou tão
triste.– Eu não posso brincar com você, – disse a raposa. – Eu ainda
não fui cativada.
– Ah! Por favor, desculpe-me, – disse o principezinho. Mas,
depois de pensar um pouco, ele acrescentou: – O que isso significa,
cativar?– Você não é daqui, – disse a raposa. – O que é que você está
procurando?– Estou à procura de homens, – disse o principezinho. – O que
isso significa, cativar?
Respondeu a raposa:– Os homens… eles têm armas, e eles caçam. É muito
perturbador. Criam galinhas também. Estes são os seus únicos
interesses. Você está procurando galinhas?– Não, – disse o principezinho. – Estou à procura de amigos O
que isso significa: cativar?– É uma coisa muito esquecida, – disse a raposa. – Significa
estabelecer laços.– Estabelecer laços?– Apenas isso, – disse a raposa. – Para mim, você ainda não é
nada mais que um menino igual a cem mil outros garotos. E eu não
tenho necessidade de ti. E você, de sua parte, não tem necessidade
de mim. Para você, eu sou nada mais do que uma raposa igual a
cem mil outras raposas. Mas, se tu me cativas, nós teremos
necessidade um do outro. Para mim, você será único em todo o
mundo. Para você, eu serei única em todo o mundo…– Estou começando a entender, – disse o principezinho. 
Existe uma flor… Eu acho que ela me cativou…
– É possível, – disse a raposa. – Na Terra vê todos os tipos de
coisas.– Oh, mas isso não é sobre a Terra! – Disse o principezinho.
A raposa pareceu perplexa, e muito curiosa.– Em outro planeta?– Sim.– Há caçadores nesse planeta?– Não.– Ah, isso é interessante! Há galinhas?– Não.– Nada é perfeito, – suspirou a raposa.
Mas ela voltou à sua ideia.– Minha vida é muito monótona, – disse a raposa. – Eu caço
as galinhas, os homens me caçam. Todas as galinhas se parecem e
todos os homens são parecidos e, em consequência, eu fico
entediada Mas se tu me cativas, será como se o sol viesse brilhar
em minha vida. Conhecerei o som dos seus passos que será
diferente de todos os outros. Os outros passos fazem com que eu
me esconda debaixo da terra. Mas os seus vão me chamar, como
uma música, para fora da toca. E depois, olha: você vê os campos
de trigo, lá longe? Eu não como pão. O trigo é de nenhuma utilidade
para mim. Os campos de trigo não têm nada a dizer para mim. E
isso é triste. Mas você tem o cabelo que é da cor do ouro. Pense em
como será maravilhoso quando me tiveres cativado! O grão, que
também é de ouro, vai me trazer de volta a sua lembrança. E eu
amarei o barulho do vento no trigo…
A raposa olhou para o pequeno príncipe, por um longo tempo.– Por favor, cativa-me! – Disse ela.– Eu gostaria muito, – o pequeno príncipe respondeu. – Mas
eu não tenho muito tempo. Tenho amigos a descobrir e muitas
coisas para entender.– A gente só conhece bem o que cativou, – disse a raposa. 
Os homens não têm mais tempo de conhecer coisa alguma.
Compram tudo prontinho nas lojas. Mas não há nenhuma loja em
qualquer lugar onde se pode comprar amizade, e por isso os
homens não têm mais amigos. Se tu queres um amigo, cativa-me.– O que eu devo fazer, para cativar você? – Perguntou o
principezinho.– Você deve ser muito paciente, – respondeu a raposa. 
Primeiro você vai sentar-se um pouco longe de mim, assim, na
grama Eu te olharei com o canto do meu olho, e você não vai dizer
nada; a linguagem é uma fonte de mal-entendidos. Mas você vai
sentar-se um pouco mais perto de mim a cada dia.
No dia seguinte o principezinho voltou.– Teria sido melhor voltares à mesma hora, disse a raposa. 
Se, por exemplo, você vem às quatro horas da tarde, desde as três
eu começarei a ficar contente. Vou me sentindo mais e mais feliz
quanto mais se aproxima a hora. Às quatro horas, eu já deverei
estar preocupada e saltarei sobre você para mostrar-lhe o quanto
estou feliz! Mas se você vens a qualquer momento, nunca saberei a
hora para deixar meu coração pronto para recebê-lo… É preciso
observar os ritos adequados.– O que é um rito? – Perguntou o principezinho.– Isso também é uma coisa muito esquecida, – disse a raposa.– São aquilo que faz um dia diferente dos outros dias, uma hora,
das outras horas. Há um rito, por exemplo, entre os meus
caçadores. Toda quinta-feira eles vão dançar com as moças da
aldeia. Então, quinta-feira é um dia maravilhoso para mim! Eu posso
dar um passeio até as vinhas. Mas se os caçadores dançassem em
qualquer dia, todos os dias seriam idênticos e eu nunca teria uma
folga.
Assim o principezinho cativou a raposa. E quando a hora da
sua partida chegou…– Ah, – disse a raposa, – eu vou chorar.– É sua própria culpa, – disse o principezinho. – Eu nunca quis
que você sofresse, mas você queria que eu te cativasse…– Sim, é isso mesmo, – respondeu a raposa.– Mas agora você vai chorar! – Retorquiu o principezinho.– É claro, – disse a raposa.– Então eu não lhe fiz bem!– Você me fez bem, – disse a raposa, – por causa da cor dos
campos de trigo. – E, em seguida, ela acrescentou:– Vá e olhe novamente para as rosas. Você vai entender agora
que o seu caso é único em todo o mundo. Em seguida, volta a me
dizer adeus, e eu vou lhe fazer de uma surpresa.
O pequeno príncipe foi embora, a olhar novamente para as
rosas.– Vocês não são nada como a minha rosa, – disse ele. – Você
não significam nada. Ninguém cativou vocês, e vocês não cativaram
ninguém. Vocês são como a minha raposa quando a conheci pela
primeira vez. Ela era apenas uma raposa igual a cem mil outras
raposas. Mas eu a fiz minha amiga e, agora, ela é única em todo o
mundo.
E as rosas ficaram muito envergonhadas.– Vocês são bonitas, mas são vazias, – ele continuou. – Não
se pode morrer por vocês. Certamente, um transeunte qualquer
pensaria que a minha rosa se parece com vocês, a rosa que cativei.
Mas ela sozinha me é mais importante do que todas as centenas de
outras rosas. Porque é ela que eu rego, porque é ela que eu pus
sob o domo de vidro, porque é a ela que tenho protegido por trás da
tela, porque é por ela que eu matei as lagartas (exceto duas ou três
que preservei para se tornarem borboletas), porque é a ela que
tenho escutado, quando ela resmunga, ou se vangloria, ou mesmo,
por vezes, quando ela não diz nada, porque ela é a minha rosa…
E voltou para despedir-se da raposa.– Adeus, – disse ele.– Adeus, – disse a raposa. – E agora, eis aqui o meu segredo,
um segredo muito simples: É apenas com o coração que se pode
ver com clareza, pois o essencial é invisível aos olhos.– O essencial é invisível aos olhos, – repetiu o principezinho,
para não se esquecer.– É o tempo que gastaste com tua rosa que a fez tão
importante.– É o tempo que eu perdi para a minha rosa, – disse o
principezinho, para se lembrar.– Os homens esqueceram essa verdade, – disse a raposa. 
Mas você não deve esquecê-la. Você se torna eternamente
responsável por aquilo que cativa. Você é responsável por sua
rosa…– Eu sou responsável pela minha rosa, repetiu o principezinho,
para não se esquecer.`
    },
    22: {
        title: "Capítulo XII - O Guarda-Agulhas",
        content: `– Bom dia, – disse o principezinho.– Bom dia, – respondeu o guarda-chaves ferroviário.– O que você faz aqui? – Perguntou o principezinho.– Eu despacho os viajantes e milhares de pacotes, – disse o
guarda-chaves. – Eu direciono os trens que os carregam: ora à
direita, ora para a esquerda.
E um trem expresso brilhantemente iluminado balançou a
cabine do guarda-chaves, ao passar rugindo como um trovão.– Ele está com muita pressa, – comentou o principezinho. – O
que eles estão procurando?– Nem mesmo o maquinista sabe disso, – disse o guarda
chaves.
E um segundo expresso brilhantemente iluminado trovejou
passando na direção oposta.– Ele já está de volta? – Questionou o pequeno príncipe.– Estes não é o mesmo, – disse o guarda-chaves. – É uma
troca.– 
Eles não estavam satisfeitos onde eles estavam? 
Perguntou o principezinho.– Ninguém nunca está satisfeito onde está, – disse o guarda
chaves.
E ouviram o trovejar de um terceiro expresso brilhantemente
iluminado.– Eles estão perseguindo os primeiros viajantes? – Indagou o
pequeno príncipe.– Eles buscam o nada em tudo, – disse o guarda-chaves. 
Eles devem estar dormindo lá dentro, ou, se não estão dormindo
estão bocejando. Somente as crianças estão achatando seus
narizes contra as vidraças.– Só as crianças sabem o que estão procurando, disse o
principezinho. – Elas dedicam o seu tempo a uma boneca de pano
que torna-se muito importante para elas… E se alguém a levar para
longe deles, elas choram.– Elas têm sorte, – disse o guarda-chaves.
`
    },
    23: {
        title: "Capítulo XXIII - O Vendedor",
        content: `- Bom dia, – disse o principezinho. – Bom dia, – respondeu o comerciante.
Este era um comerciante que vendia comprimidos que haviam
sido inventados para saciar a sede. Você só precisava engolir um
comprimido por semana, e não sentiria nenhuma necessidade de
algo para beber.– 
Por que você está vendendo isso? – Perguntou o
principezinho.– Porque eles poupam uma quantidade enorme de tempo, 
disse o comerciante. – Os cálculos foram feitos por especialistas.
Com essas pílulas, você economiza 53 minutos em cada semana.– E o que eu faço com esses 53 minutos?– Qualquer coisa que você queira…– Quanto a mim, – disse o principezinho para si mesmo, – se
eu tivesse 53 minutos para gastar como eu quisesse, eu caminharia
prazerosamente em direção a uma fonte de água fresca.`
    },
    24: {
        title: "Capítulo XXIV - O Poço",
        content: `Era agora o oitavo dia desde o meu acidente no deserto, e eu
tinha escutado a história do comerciante enquanto bebia a última
gota da minha reserva de água.– Ah, – eu disse para o pequeno príncipe, – estas suas
memórias são muito charmosas, mas eu ainda não consegui reparar
o meu avião e não tenho nada mais para beber; eu também ficaria
muito feliz se pudesse andar prazerosamente em direção a uma
fonte de água fresca!– Minha amiga a raposa…, – disse o pequeno príncipe para
mim.– Meu caro homenzinho, isso não é mais uma questão que
tenha alguma coisa a ver com a raposa!– Por que não?– Porque eu estou a ponto de morrer de sede…
Ele não seguiu o meu raciocínio, e me respondeu:– É uma boa coisa ter tido um amigo, mesmo que se esteja
prestes a morrer. Eu, por exemplo, estou muito contente de ter tido
uma raposa como amiga…– Ele não tem como entender o perigo, – eu disse a mim
mesmo. – Ele nunca teve fome ou sede. Um pouco de sol é tudo o
que ele precisa…
Mas ele me olhou de forma intensa, e respondeu ao meu
pensamento:
– Estou com sede, também. Vamos procurar um poço…
Fiz um gesto de cansaço. É um absurdo procurar um poço, de
forma aleatória, na imensidão do deserto. No entanto, começamos a
caminhar.
Depois de marchar por várias horas em silêncio, a escuridão
caiu e as estrelas começaram a sair. A sede me tornara um pouco
febril, e eu olhei para elas como se estivesse num sonho. As últimas
palavras do pequeno príncipe vieram cambaleando em minha
memória:– Então você também está com sede? – Eu exigi.
Mas ele não respondeu à minha pergunta. Ele apenas me
disse:– A água também pode ser boa para o coração…
Eu não entendi essa resposta, mas não disse nada. Eu sabia
muito bem que era impossível contradizê-lo.
Ele estava cansado. Ele sentou-se e sentei-me ao seu lado. E,
depois de um pouco de silêncio, ele falou de novo:– As estrelas são bonitas, por causa de uma flor que não pode
ser vista.
Eu respondi:– Sim, é isso mesmo.
E, sem dizer mais nada, eu olhei através dos cumes de areia
que se prolongavam adiante de nós sob o luar.– O deserto é belo, – o pequeno príncipe acrescentou.
E isso era verdade. Eu sempre amei o deserto. Se alguém se
senta em uma duna de areia do deserto, não vê nada, não ouve
nada. No entanto, através do silêncio algo palpita, e brilha…– O que torna belo o deserto, – disse o pequeno príncipe, – é
que em algum lugar ele esconde um poço…
Fiquei espantado com a súbita compreensão da misteriosa
radiação das areias. Quando eu era pequeno morava em uma casa
antiga, havia uma lenda de um tesouro que fora enterrado lá.
Certamente, ninguém nunca tinha conseguido encontrá-lo; talvez
ninguém nunca tivesse sequer olhado para ele. Mas havia um
encantamento sobre aquela casa. Minha casa escondia um segredo
nas profundezas do seu coração…– Sim, – eu disse para o pequeno príncipe. – A casa, as
estrelas, o deserto; o que lhes dá a sua beleza é algo que é
invisível!– Estou feliz, disse ele, – que você concorde com a minha
raposa.
Quando o pequeno príncipe adormeceu, levei-o em meus
braços e parti a pé mais uma vez. Eu me senti profundamente
comovido, e agitei-me. Pareceu-me que eu estava carregando um
tesouro muito frágil. Pareceu-me, ainda, que não havia nada mais
frágil em toda a terra. À luz da lua eu olhei para a sua testa pálida,
seu olhos fechados, suas mechas de cabelo que tremulavam ao
vento, e disse a mim mesmo:– O que eu vejo aqui é nada mais que uma concha. O
essencial é invisível…
Quando seus lábios se abriram um pouco com a suspeita de
um meio sorriso, eu disse a mim mesmo, mais uma vez:– O que me move tão profundamente, sobre este pequeno
príncipe, que está dormindo aqui, é a sua lealdade para com uma
flor; a imagem de uma rosa que brilha através de todo o seu ser
como a chama de uma lâmpada, mesmo quando ele está
dormindo…
E eu o senti ser ainda mais frágil. Senti a necessidade de
protegê-lo, como se ele próprio fosse uma chama que pudesse ser
extinta por uma pequena rajada de vento…
E, enquanto eu caminhava, eu encontrei o poço, ao raiar do
dia.`
    },
    25: {
        title: "Capítulo XXV - A Água",
        content: `– Os homens, – disse o pequeno príncipe, – fazem seu
caminho em trens expressos, mas eles não sabem o que buscam.
Então eles ficam dando voltas e voltas…
E acrescentou:– Não vale a pena…
O poço que tinham encontrado não era como os poços do
Saara. Os poços do Saara são meros buracos cavados na areia.
Este era como o poço de uma vila. Mas não havia nenhuma aldeia
aqui, e eu pensava eu devia estar sonhando…– É estranho, – eu disse para o pequeno príncipe. – Tudo está
pronto para uso: a polia, o balde, a corda…
Ele riu, puxou a corda, e pôs a roldana para trabalhar. A
roldana gemeu, como um velho catavento que o vento tivesse
esquecido.
– Você ouviu? – Disse o principezinho. – Nós despertamos o
poço e ele está cantando…
Eu não queria que ele se cansasse com a corda.– Deixa comigo, – eu disse. – É muito pesado para você.
Levantei o balde lentamente até a beira do poço e o apoiei na
mureta, cansado e contente com a minha realização. A canção da
polia ainda estava em meus ouvidos, e eu podia ver o brilho da luz
solar na água ainda tremeluzindo.– Estou sedento por essa água, – disse o principezinho. – Dá
me um pouco para beber…
Eu entendi o que ele estava querendo e levantei o balde até os
seus lábios. Ele bebeu, de olhos fechados. Era tão doce quanto uma
festa. Esta água era realmente diferente de alimento comum. Sua
doçura nasceu da caminhada sob as estrelas, da canção da polia,
do esforço dos meus braços. Foi bom para o coração, como um
presente. Quando eu era um garotinho, as luzes da árvore de Natal,
a música da Missa do Galo, e a ternura dos rostos sorridentes é
produziam todo o esplendor dos presentes que eu recebia.– Os homens onde você vive, – disse o pequeno príncipe, 
cultivam cinco mil rosas num mesmo jardim. mas não encontram
nele o que buscam.– Eles não encontram, – eu concordei.– E, no entanto, o que eles procuram poderia ser encontrado
em uma única rosa, ou em um pouco d' água.– Sim, isso é verdade, – eu disse.
E o principezinho acrescentou:– Mas os olhos são cegos. É preciso olhar com o coração…
Eu tinha bebido a água e respirava facilmente. Ao nascer do
sol na areia ficou cor de mel. E a cor de mel me fazia feliz também.
Então, o que me trouxe este sentimento de tristeza?– Você tem de manter sua promessa, – disse o principezinho,
baixinho, quando ele se sentou ao meu lado mais uma vez.– Que promessa?– Você sabe, uma focinheira para a minha ovelha Eu sou
responsável por esta flor…
Eu levei os meus rascunhos de desenhos do meu bolso. O
pequeno príncipe olhou-os, e riu quando disse:– Seus baobás, eles parecem um pouco com repolhos.– Oh!
Eu estava tão orgulhoso dos meus baobás!– A sua raposa… suas orelhas parecem chifres, elas são muito
compridas.
E ele riu de novo.– Você não é justo, pequeno príncipe, – eu disse. – Eu não sei
como desenhar qualquer coisa, exceto jiboias por dentro e por fora.– Oh, tudo bem, – disse ele, – as crianças a entenderão.
Então eu fiz um esboço a lápis de uma focinheira. E quando eu
dei a ele meu coração se partiu.– Você tem planos que eu desconheço, – eu disse.
Mas ele não me respondeu. Ele disse-me, em vez disso:– Você sabe, a minha chegada na Terra. Amanhã vai ser o seu
aniversário…
Então, depois de um silêncio, ele continuou:– Eu desci aqui bem perto.
E ele corou.
E mais uma vez, sem entender o porquê, eu tive uma
sensação estranha de tristeza. Uma questão, no entanto, ocorreu
me:
– Então não foi por acaso que, na manhã em que eu te
conheci… há uma semana? Você estava passeando assim, sozinho,
a mil milhas de qualquer região habitada. Você estava voltando para
o lugar onde você pousou?
O pequeno príncipe corou novamente.
E acrescentei, com alguma hesitação:– Por causa do aniversário?
O pequeno príncipe corou uma vez mais. Ele nunca respondia
perguntas, mas quando se ruboriza isso queria dizer “sim”, não é?– Ah, – eu disse a ele: – Eu sou um pouco temeroso…
Mas ele me interrompeu.– Agora você deve trabalhar. Você deve retornar para o seu
motor. Eu estarei esperando por você aqui. Volte amanhã à noite…
Mas eu não estava tranquilo. Lembrei-me da raposa. Corre-se
o risco de chorar um pouco, se alguém se deixa ser cativado…`
    },
    26: {
        title: "Capítulo XVI - A Despedida",
        content: `Ao lado do poço havia a ruína de um velho muro de pedra.
Quando voltei do meu trabalho, na noite seguinte, eu vi a alguma
distância o meu pequeno príncipe sentado em cima da parede, com
os pés balançando. E o ouvi dizer:– Você, portanto, não se lembra? Este não é o ponto exato.
Outra voz deve ter-lhe respondido, pois ele respondeu:– Sim, sim! É o dia certo, mas este não é o lugar.
Continuei minha caminhada em direção ao muro. Em nenhum
momento eu vi ou ouvi ninguém. O pequeno príncipe, no entanto,
respondeu mais uma vez:– Exatamente. Você vai ver onde a minha pista começa, na
areia. Você não tem nada a fazer senão esperar por mim lá. Vou
estar lá hoje à noite.
Eu estava a apenas vinte metros da parede, mas ainda não via
nada.
Depois de um silêncio o pequeno príncipe falou novamente:– Você tem veneno bom? Você tem certeza que ele não vai me
fazer sofrer muito tempo?
Eu parei no meu caminho, meu coração dilacerado; mais ainda
porque eu não entendia.– Agora vá embora, – disse o principezinho. – Eu quero descer
do muro.
Baixei os olhos, então, ao pé do muro e saltei no ar. Diante de
mim, de frente para o pequeno príncipe, estava uma dessas
serpentes amarelas que levam apenas trinta segundos para dar
cabo de sua vida. Enquanto eu sacava meu revólver do seu coldre
dei um passo correndo em sua direção, mas, por causa do barulho
que fiz, a cobra se escondeu-se na areia, como uma corrente
d'águas que seca, e rapidamente desapareceu entre as pedras com
um som metálico.
Cheguei a parede apenas a tempo de pegar o meu pequeno homem
em meus braços; seu rosto estava branco como a neve.– O que isto significa? – Eu exigi. – Por que você está falando
com cobras?
Eu tinha afrouxado o cachecol dourado que ele sempre usava.
Eu tinha umedecido suas têmporas, e dei a ele um pouco de água
para beber. E então não ousei fazer-lhe mais perguntas. Ele olhou
para mim muito gravemente, e colocou os braços em volta do meu
pescoço. Eu sentia seu coração bater como o coração de um
pássaro morrendo, com um tiro de rifle de alguém…– Eu estou contente por você ter descoberto o que estava
acontecendo com o seu motor, – disse ele. – Agora você pode voltar
casa…– Como você sabe disso?
Eu estava vindo para dizer-lhe que o meu trabalho tinha sido
bem-sucedido, além de qualquer coisa que eu tivesse ousado
esperar.
Ele não respondeu a minha pergunta, mas acrescentou:– Eu também estou indo para casa hoje…
Em seguida, com tristeza:– É muito mais longe… e é muito mais difícil…
Eu senti que havia algo de extraordinário. Eu o agarrei nos
braços como uma criancinha, e ainda assim pareceu-me que ele
estava mergulhando de cabeça em direção a um abismo do qual eu
não podia fazer nada para contê-lo…
Seu olhar era muito grave:– Eu tenho a minha ovelha. E eu tenho a caixa de cordeiro. E
eu tenho a focinheira…
Então ele sorriu melancolicamente.
Eu esperei muito tempo. Eu podia ver que ele estava revivendo
pouco a pouco.– Caro homenzinho, – eu disse a ele, – você está com medo…
Ele estava com medo, não havia nenhuma dúvida sobre isso.
Mas ele riu levemente.– Eu vou ter muito mais medo esta noite…
Mais uma vez eu me senti congelado pela sensação de algo
irreparável. E eu sabia que eu não podia suportar a ideia de nunca
mais ouvir sua risada. Para mim, era como uma fonte de água
fresca no deserto.– Homenzinho, – eu disse, – eu quero ouvir você rir de novo.
Mas ele me disse:– Hoje à noite, fará um ano… Minha estrela, então, poderá ser
encontrada logo acima do lugar onde eu desci na Terra, há um
ano…– Homenzinho, – eu disse, – diga-me que é só um sonho
ruim… Este caso da cobra, e o ponto de encontro, e a estrela…
Mas ele não respondeu à minha súplica. Ele disse-me, em vez
disso:– A única coisa que é realmente importante é aquilo que não
se vê…– Sim eu sei…– É como com a flor. Se você ama uma flor que vive em uma
estrela, é doce olhar para o céu à noite. Todas as estrelas são como
flores…– Sim eu sei…– É como com a água Por causa da polia e da corda, o que
você me deu a beber era como música. Você se lembra como era
bom.– Sim eu sei…– E à noite você vai olhar para as estrelas. Onde eu moro tudo
é tão pequeno que eu não posso mostrar onde fica minha estrela
para que possa encontrá-la. É melhor, assim. Minha estrela será
apenas uma das estrelas, para você. E assim você vai gostar de
olhar para todas as estrelas no céu… todas elas serão suas amigas.
E, além disso, eu vou fazer-lhe um presente…
Ele riu novamente.– Ah, pequeno príncipe, querido pequeno príncipe! Gosto de
ouvir sua risada!– Esse é o meu presente. Apenas isso. Vai ser como foi
quando nós bebemos a água…– O que você está tentando dizer?– Todos os homens têm as estrelas, – ele respondeu, – mas
elas não são a mesma coisa para pessoas diferentes. Para alguns,
que são viajantes, as estrelas são guias. Para outros não são mais
do que pequenas luzes no céu. Para outros, que são estudiosos,
são problemas. Para o meu empresário, eram riqueza. Mas todas
essas estrelas se calam. Você, apenas você, terá as estrelas como
ninguém mais as têm.– O que você está tentando dizer?– Em uma das estrelas estarei vivendo, e em uma delas eu
vou estar rindo. E por isso vai ser como se todas as estrelas
estivessem rindo, quando você olhar para o céu à noite. Você,
apenas você terá estrelas que podem rir!
E ele riu de novo.– E quando a sua tristeza for consolada (o tempo acalma todas
as dores), você ficará contente por ter me conhecido. Você sempre
será meu amigo. Você desejará rir comigo. E às vezes você vai abrir
a sua janela, então, por puro prazer… e seus amigos ficarão
surpresos ao vê-lo rindo enquanto olha para o céu! Então você vai
dizer-lhes: “Sim, as estrelas sempre me fazem rir!” E eles vão
pensar que você é louco. Este será uma mágica muito pobre que eu
lançarei sobre você…
E ele riu de novo.– Será ser como se, em lugar das estrelas, eu tivesse lhe dado
um grande número de pequenos sinos que sabem rir…
E ele riu de novo. Em seguida, ele rapidamente ficou sério:– Hoje à noite, você sabe Não venha…– Não vou deixar você, – eu disse.– Eu vou parecer estar sofrendo. Vou parecer um pouco como
se estivesse morrendo. Isso é assim. Não venha para ver isso. Não
vale a pena…– Não vou deixar você.
Mas ele estava preocupado.– Eu digo também por causa da serpente Ela não deve mordê
lo. Serpentes são criaturas maliciosas. Esta pode mordê-lo apenas
por diversão…– Não vou deixar você.
Mas um pensamento veio para tranquilizá-lo:– É verdade que elas não têm mais veneno para uma segunda
mordida.
Naquela noite eu não o vi partir. Ele afastou-se sem fazer
barulho. Quando eu consegui alcançá-lo, ele estava caminhando
com um passo rápido e decidido. Ele me disse apenas:
– Ah! Você está aí…
E ele me pegou pela mão. Mas ele ainda estava preocupado.– Foi um erro você ter vindo. Você vai sofrer, vou parecer como
se eu estivesse morrendo… O que não será verdade…
Eu não disse nada.– Você entende… Ele é muito longe. Eu não posso levar este
corpo comigo. É muito pesado.
Eu não disse nada.– Mas será como uma concha velha abandonada. Não há
nada de triste em conchas velhas…
Eu não disse nada.
Ele estava um pouco desanimado. Mas ele fez mais um
esforço:– Você sabe, vai ser muito bom. Eu também olharei para as
estrelas. Todas as estrelas serão poços com uma roldana
enferrujada.
Todas as estrelas derramarão água doce para eu beber…
Eu não disse nada.– Isso será tão divertido! Você terá quinhentos milhões de
pequenos sinos, e terei quinhentos milhões de fontes de água
doce…
E ele também não disse mais nada, porque ele estava
chorando…– Chegamos. Deixe-me sozinho.
E sentou-se, porque ele estava com medo.
Então ele disse, mais uma vez:– Você sabe, a minha flor. Eu sou responsável por ela e ela é
muito frágil. Ela é tão ingênua. Ela tem apenas quatro espinhos
inúteis para proteger-se contra o mundo inteiro…!
Eu também me sentei, porque eu não era mais capaz de me
levantar.
– Isso… isso é tudo…
Ele ainda hesitou um pouco; em seguida, ele se levantou e deu
um passo. Eu não podia me mover.
Não houve mais nada, apenas um flash amarelo perto do seu
tornozelo. Ele parou por um momento. Não chorou, apenas tombou
suavemente como uma árvore caindo. Ele não chegou a fazer
nenhum ruído, por causa da areia.`
    },
    27: {
        title: "Capítulo XXVII - A Estrela",
        content: `E agora seis anos já se passaram… Eu nunca contei essa
história. Os companheiros que me encontraram no meu retorno
ficaram muito contentes em me ver vivo. Eu estava triste, mas eu
lhes disse:– Estou cansado.
Agora, a minha tristeza é consolada, um pouco. Mas não
totalmente. Eu sei que ele voltou para seu planeta, porque não
encontrei corpo dele quando amanheceu. Não era um corpo tão
pesado… e à noite, eu adoro ouvir as estrelas. É como quinhentos
milhões de pequenos sinos…
Mas há uma coisa extraordinária… quando eu fiz a focinheira
para o pequeno príncipe, eu esqueci de acrescentar uma presilha de
couro para ele. Nunca seria capaz de prendê-la em suas ovelhas.
Então agora eu fico me perguntando: o que estará acontecendo em
seu planeta? Talvez as ovelhas tenham comido a flor…
Ao mesmo tempo eu digo para mim mesmo: – Certamente
não. O pequeno príncipe protege sua flor sob o domo de vidro,
todas as noites, e cuida de suas ovelhas com muito cuidado!…
Então, eu me alegro. E há a doçura no riso de todas as
estrelas.
Mas em outros momentos eu digo a mim mesmo: – Em algum
momento ou outro pode se distrair, e isso é o suficiente! Em alguma
noite ele pode esquecer o domo de vidro, ou a ovelha sair, sem
fazer barulho, no meio da noite…
E, em seguida, os pequenos sinos mudam para lágrimas…
Aqui, então, está um grande mistério. Para você que também
ama o pequeno príncipe, e para mim, nada no universo pode ser o
mesmo se em algum lugar, não sei onde, uma ovelha que nunca vi
tiver ou não comido uma rosa…
Olhe para o céu. Pergunte-se: sim ou não? Terão as ovelhas
comido a flor? E você verá como tudo muda…
E nenhum adulto nunca vai entender que este é um assunto de
tanta importância!
Esta é, para mim, a paisagem mais bela e mais triste do
mundo. É o mesmo que no capítulo anterior, mas eu coloquei-a
novamente para imprimi-la em sua memória. É aqui que o pequeno
príncipe apareceu na Terra, e desapareceu.
Olhe com cuidado para que você tenha a certeza de
reconhecê-la no caso de você viajar algum dia para o deserto
Africano. E, se você não cair sobre este local, por favor, não se
apresse nisso. Espere por um tempo, exatamente sob a estrela.
Então, se aparecer um homem risonho, com cabelos dourados e
que se recusa a responder perguntas, você vai saber quem ele é.
Se isso acontecer, por favor, me conforte. Conte-me que ele voltou.`
    },
};

/* =========================================
   3. THE PROCESSOR (The Engine)
   Automagically turns text into data objects.
   ========================================= */
function processText(text) {
    // Splits text into:
    // 1. Words (including accents and hyphens for things like 'perguntei-lhes')
    // 2. Punctuation
    // 3. Numbers
    // 4. Newlines
    const tokens = text.match(/([a-zA-ZÀ-ÿ-]+|[.,!?;:()–—"""…]|\d+|\n+)/g) || [];
    
    return tokens.map(token => {
        // 1. Handle Paragraph Breaks
        if (token.match(/\n+/)) {
            return { word: "\n\n", type: "paragrafo" };
        }
        
        // 2. Handle Punctuation
        if (token.match(/[.,!?;:()–—"""…]/)) {
            return { word: token, type: "pontuacao", def: "Pontuação", eng: "punctuation" };
        }
        
        // 3. Handle Numbers
        if (token.match(/^\d+$/)) {
            return { 
                word: token, 
                type: "numero", 
                def: `Número ${token}`, 
                eng: token 
            };
        }
        
        // 4. Handle Words
        const lowerKey = token.toLowerCase();
        // Look up word in library, or use default if not found
        const definition = vocabularyLibrary[lowerKey] || vocabularyLibrary["_default"];
        
        return {
            word: token, // Preserve original casing (Uma vs uma)
            type: definition.type,
            def: definition.def,
            eng: definition.eng
        };
    });
}

/* =========================================
   4. UI FUNCTIONS (The Display)
   ========================================= */

let currentChapter = 1;
let helpEnabled = false;
let quizMode = false;
let wordsClicked = new Set();

function createWordElement(wordData) {
    const span = document.createElement('span');
    span.className = `word ${wordData.type}`;
    span.textContent = wordData.word;

    // Default cursor for punctuation
    if (wordData.type === 'pontuacao') {
        span.style.cursor = 'default';
        return span;
    }
    
    // Paragraph break element
    if (wordData.type === 'paragrafo') {
        const br = document.createElement('br');
        br.className = 'paragraph-break';
        return br;
    }
    
    // Tooltip for actual words
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerHTML = `
        <div class="tooltip-content">
            <div class="tooltip-title">${wordData.word}</div>
            <div class="tooltip-type">${wordData.type}</div>
            <div>${wordData.def}</div>
            <div class="tooltip-translation">🇬🇧 ${wordData.eng}</div>
        </div>
    `;
    span.appendChild(tooltip);
    
    span.addEventListener('click', function() {
        if (!wordsClicked.has(wordData.word)) {
            wordsClicked.add(wordData.word);
            updateStats(); // We will update this function to handle the new structure
        }
    });
    return span;
}

function loadChapter(chapterNum) {
    const rawChapter = rawChapters[chapterNum];
    
    // PROCESS TEXT ON THE FLY
    const processedWords = processText(rawChapter.content);

    const content = document.getElementById('textContent');
    content.innerHTML = '';

    const title = document.createElement('h2');
    title.className = 'chapter-title';
    title.textContent = rawChapter.title;
    content.appendChild(title);
    
    const textContainer = document.createElement('div');
    textContainer.className = 'text-container';

    processedWords.forEach((wordData, index) => {
        textContainer.appendChild(createWordElement(wordData));
        
        // Smart Spacing Logic
        if (index < processedWords.length - 1) {
            const nextWord = processedWords[index + 1];
            const currentWord = wordData.word;
            
            // Do not add space before these
            const isPunctuation = [',', '.', '!', '?', ':', ';', '–', '—', ')', ']', '…', '...'].includes(nextWord.word);
            
            // Do not add space after these
            const isOpeningPunctuation = ['(', '[', '–', '—'].includes(currentWord);
            
            // Do not add space around line breaks
            const isLineBreak = wordData.type === 'paragrafo' || nextWord.type === 'paragrafo';
            
            if (!isPunctuation && !isOpeningPunctuation && !isLineBreak) {
                textContainer.appendChild(document.createTextNode(' '));
            }
        }
    });

    content.appendChild(textContainer);
    
    // Re-apply help colors if enabled
    if (helpEnabled) {
        toggleHelp(true); // force refresh colors
    }
    
    // Update stats using the processed words for this chapter
    updateStats(processedWords);
}

function changeChapter() {
    const select = document.getElementById('chapterSelect');
    currentChapter = parseInt(select.value);
    wordsClicked.clear();
    loadChapter(currentChapter);
    hideVocabulary();
}

function toggleHelp(forceState = null) {
    if (forceState === null) {
        helpEnabled = !helpEnabled;
    }
    
    const btn = document.getElementById('helpBtnText');
    if(btn) btn.textContent = helpEnabled ? '🔍 Esconder Ajuda' : '🔍 Mostrar Ajuda';
    
    const words = document.querySelectorAll('.word');
    words.forEach(word => {
        if (helpEnabled) {
            const type = word.className.split(' ')[1];
            word.style.backgroundColor = 
                type === 'substantivo' ? '#e3f2fd' :
                type === 'verbo' ? '#f3e5f5' :
                type === 'adjetivo' ? '#e8f5e9' :
                type === 'pronome' ? '#fff3e0' :
                type === 'preposicao' ? '#fce4ec' :
                type === 'conjuncao' ? '#f1f8e9' :
                type === 'advérbio' ? '#e0f2f1' : 'transparent';
        } else {
            word.style.backgroundColor = 'transparent';
        }
    });
}

function toggleQuizMode() {
    quizMode = !quizMode;
    const container = document.querySelector('.container');
    if (quizMode) {
        container.classList.add('quiz-mode');
        alert('🎯 Modo Quiz ativado! Tente adivinhar as palavras sem ver as dicas.');
    } else {
        container.classList.remove('quiz-mode');
    }
}

function showVocabulary() {
    const vocabSection = document.getElementById('vocabularySection');
    const textContent = document.getElementById('textContent');
    const vocabContent = document.getElementById('vocabularyContent');

    if (vocabSection.classList.contains('hidden')) {
        vocabSection.classList.remove('hidden');
        textContent.classList.add('hidden');
        
        // Process the current chapter text to find which words to show
        const rawChapter = rawChapters[currentChapter];
        const processedWords = processText(rawChapter.content);

        vocabContent.innerHTML = '';
        
        // Create a unique set of words to avoid duplicates in vocabulary list
        const uniqueWords = new Set();
        
        processedWords.forEach(wordData => {
            // Filter out punctuation, paragraphs, and duplicates
            if (wordData.type !== 'pontuacao' && 
                wordData.type !== 'paragrafo' && 
                !uniqueWords.has(wordData.word.toLowerCase())) {
                
                uniqueWords.add(wordData.word.toLowerCase());
                
                const item = document.createElement('div');
                item.className = `vocab-item ${wordData.type}`;
                item.innerHTML = `
                    <div><strong>${wordData.word}</strong> (${wordData.type})</div>
                    <div>${wordData.def} - <em>${wordData.eng}</em></div>
                `;
                vocabContent.appendChild(item);
            }
        });
    } else {
        hideVocabulary();
    }
}

function hideVocabulary() {
    document.getElementById('vocabularySection').classList.add('hidden');
    document.getElementById('textContent').classList.remove('hidden');
}

function updateStats(wordsList = null) {
    // If no list provided, we need to process the current chapter again to get counts
    // (Optimization: In a larger app, we'd store the processed list in a variable)
    if (!wordsList) {
        const rawChapter = rawChapters[currentChapter];
        wordsList = processText(rawChapter.content);
    }

    // Filter for real words
    const realWords = wordsList.filter(
        w => w.type !== 'pontuacao' && w.type !== 'paragrafo'
    );
    
    document.getElementById('wordCount').textContent = realWords.length;
    document.getElementById('wordsLearned').textContent = wordsClicked.size;
    document.getElementById('readingTime').textContent = Math.ceil(realWords.length / 200);
    
    const progress = realWords.length > 0 ? (wordsClicked.size / realWords.length) * 100 : 0;
    document.getElementById('progressBar').style.width = progress + '%';
}

// Inicializar
loadChapter(1);
