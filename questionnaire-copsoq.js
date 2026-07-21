const questions = [
    { text: "Prenez-vous du retard dans votre travail ?", options: ["Toujours", "Souvent", "Parfois", "Rarement", "Presque jamais/Jamais"], domaine: "Contraintes quantitatives", echelle: "Charge de travail" },
    { text: "Disposez-vous d'un temps suffisant pour accomplir vos tâches professionnelles ?", options: ["Presque jamais/Jamais", "Rarement", "Parfois", "Souvent", "Toujours"], domaine: "Contraintes quantitatives", echelle: "Charge de travail" },
    { text: "Travaillez-vous à une cadence élevée tout au long de la journée ?", options: ["Toujours", "Souvent", "Parfois", "Rarement", "Presque jamais/Jamais"], domaine: "Contraintes quantitatives", echelle: "Rythme de travail" },
    { text: "Est-il nécessaire de maintenir un rythme soutenu au travail ?", options: ["Toujours", "Souvent", "Parfois", "Rarement", "Presque jamais/Jamais"], domaine: "Contraintes quantitatives", echelle: "Rythme de travail" },
    { text: "Durant votre travail, devez-vous avoir l'œil sur beaucoup de choses ?", options: ["Toujours", "Souvent", "Parfois", "Rarement", "Presque jamais/Jamais"], domaine: "Contraintes quantitatives", echelle: "Exigences cognitives" },
    { text: "Votre travail exige-t-il que vous vous souveniez de beaucoup de choses ?", options: ["Toujours", "Souvent", "Parfois", "Rarement", "Presque jamais/Jamais"], domaine: "Contraintes quantitatives", echelle: "Exigences cognitives" },
    { text: "Au travail, êtes-vous informé(e) suffisamment à l'avance au sujet par exemple de décisions importantes, de changements ou de projets futurs ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Organisation et leadership", echelle: "Prévisibilité" },
    { text: "Recevez-vous toutes les informations dont vous avez besoin pour bien faire votre travail ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Organisation et leadership", echelle: "Prévisibilité" },
    { text: "Votre travail est-il reconnu et apprécié par le management ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Organisation et leadership", echelle: "Reconnaissance" },
    { text: "Êtes-vous traité(e) équitablement au travail ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Organisation et leadership", echelle: "Reconnaissance" },
    { text: "Les conflits sont-ils résolus de manière équitable ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Organisation et leadership", echelle: "Équité" },
    { text: "Le travail est-il réparti équitablement ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Organisation et leadership", echelle: "Équité" },
    { text: "Votre travail a-t-il des objectifs clairs ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Organisation et leadership", echelle: "Clarté des rôles" },
    { text: "Savez-vous exactement ce que l'on attend de vous au travail ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Organisation et leadership", echelle: "Clarté des rôles" },
    { text: "Au travail, êtes-vous soumis(e) à des demandes contradictoires ?", options: ["Dans une très grande mesure", "Dans une grande mesure", "Plus ou moins", "Dans une faible mesure", "Dans une très faible mesure"], domaine: "Organisation et leadership", echelle: "Conflit de rôles" },
    { text: "Devez-vous parfois faire des choses qui auraient dû être faites autrement ?", options: ["Dans une très grande mesure", "Dans une grande mesure", "Plus ou moins", "Dans une faible mesure", "Dans une très faible mesure"], domaine: "Organisation et leadership", echelle: "Conflit de rôles" },
    { text: "Dans quelle mesure diriez-vous que votre supérieur(e) hiérarchique accorde une grande priorité à la satisfaction au travail ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Organisation et leadership", echelle: "Qualité de leadership du supérieur hiérarchique" },
    { text: "Dans quelle mesure diriez-vous que votre supérieur(e) hiérarchique est compétent(e) dans la planification du travail ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Organisation et leadership", echelle: "Qualité de leadership du supérieur hiérarchique" },
    { text: "À quelle fréquence votre supérieur(e) hiérarchique est-il(elle) disposé(e) à vous écouter au sujet de vos problèmes au travail ?", options: ["Presque jamais/Jamais", "Rarement", "Parfois", "Souvent", "Toujours"], domaine: "Organisation et leadership", echelle: "Soutien social de la part du supérieur hiérarchique" },
    { text: "À quelle fréquence recevez-vous de l'aide et du soutien de votre supérieur(e) hiérarchique ?", options: ["Presque jamais/Jamais", "Rarement", "Parfois", "Souvent", "Toujours"], domaine: "Organisation et leadership", echelle: "Soutien social de la part du supérieur hiérarchique" },
    { text: "Le management fait-il confiance aux salariés quant à leur capacité à bien faire leur travail ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Organisation et leadership", echelle: "Confiance entre les salariés et le management" },
    { text: "Pouvez-vous faire confiance aux informations venant du management ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Organisation et leadership", echelle: "Confiance entre les salariés et le management" },
    { text: "Y a-t-il une bonne coopération entre les collègues au travail ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Relations horizontales", echelle: "Confiance entre les collègues" },
    { text: "Dans l'ensemble, les salariés se font-ils confiance entre eux ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Relations horizontales", echelle: "Confiance entre les collègues" },
    { text: "À quelle fréquence recevez-vous de l'aide et du soutien de vos collègues ?", options: ["Presque jamais/Jamais", "Rarement", "Parfois", "Souvent", "Toujours"], domaine: "Relations horizontales", echelle: "Soutien social de la part des collègues" },
    { text: "À quelle fréquence vos collègues se montrent-ils à l'écoute de vos problèmes au travail ?", options: ["Presque jamais/Jamais", "Rarement", "Parfois", "Souvent", "Toujours"], domaine: "Relations horizontales", echelle: "Soutien social de la part des collègues" },
    { text: "Avez-vous une grande marge de manœuvre dans votre travail ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Autonomie", echelle: "Marge de manœuvre" },
    { text: "Pouvez-vous intervenir sur la quantité de travail qui vous est attribuée ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Autonomie", echelle: "Marge de manœuvre" },
    { text: "Votre travail nécessite-t-il que vous preniez des initiatives ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Autonomie", echelle: "Possibilités d'épanouissement" },
    { text: "Votre travail vous donne-il la possibilité d'apprendre des choses nouvelles ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Autonomie", echelle: "Possibilités d'épanouissement" },
    { text: "En général, diriez-vous que votre santé est :", options: ["Mauvaise", "Plutôt mauvaise", "Assez bonne", "Bonne", "Excellente/Très bonne"], domaine: "Santé et Bien-être", echelle: "Santé auto-évaluée" },
    { text: "À quelle fréquence avez-vous été irritable ?", options: ["Tout le temps", "Très souvent", "Parfois", "Très peu souvent", "Jamais"], domaine: "Santé et Bien-être", echelle: "Stress" },
    { text: "À quelle fréquence avez-vous été stressé(e) ?", options: ["Tout le temps", "Très souvent", "Parfois", "Très peu souvent", "Jamais"], domaine: "Santé et Bien-être", echelle: "Stress" },
    { text: "À quelle fréquence vous êtes-vous senti(e) à bout de force ?", options: ["Tout le temps", "Très souvent", "Parfois", "Très peu souvent", "Jamais"], domaine: "Santé et Bien-être", echelle: "Épuisement" },
    { text: "À quelle fréquence avez-vous été émotionnellement épuisé(e) ?", options: ["Tout le temps", "Très souvent", "Parfois", "Très peu souvent", "Jamais"], domaine: "Santé et Bien-être", echelle: "Épuisement" },
    { text: "Votre travail vous place-t-il dans des situations déstabilisantes sur le plan émotionnel ?", options: ["Toujours", "Souvent", "Parfois", "Rarement", "Presque jamais/Jamais"], domaine: "Santé et Bien-être", echelle: "Exigences émotionnelles" },
    { text: "Votre travail est-il éprouvant sur le plan émotionnel ?", options: ["Toujours", "Souvent", "Parfois", "Rarement", "Presque jamais/Jamais"], domaine: "Santé et Bien-être", echelle: "Exigences émotionnelles" },
    { text: "Sentez-vous que votre travail vous prend tellement d'énergie que cela a un impact négatif sur votre vie privée ?", options: ["Oui, certainement", "Oui, jusqu'à un certain point", "Oui, mais juste un peu", "Non, pas du tout"], domaine: "Santé et Bien-être", echelle: "Conflit famille/travail" },
    { text: "Sentez-vous que votre travail vous prend tellement de temps que cela a un impact négatif sur votre vie privée ?", options: ["Oui, certainement", "Oui, jusqu'à un certain point", "Oui, mais juste un peu", "Non, pas du tout"], domaine: "Santé et Bien-être", echelle: "Conflit famille/travail" },
    { text: "Êtes-vous inquiet(ète) à l'idée de perdre votre emploi ?", options: ["Dans une très grande mesure", "Dans une grande mesure", "Plus ou moins", "Dans une faible mesure", "Dans une très faible mesure"], domaine: "Santé et Bien-être", echelle: "Insécurité professionnelle" },
    { text: "Craignez-vous d'être muté(e) à un autre poste de travail contre votre volonté ?", options: ["Dans une très grande mesure", "Dans une grande mesure", "Plus ou moins", "Dans une faible mesure", "Dans une très faible mesure"], domaine: "Santé et Bien-être", echelle: "Insécurité professionnelle" },
    { text: "Votre travail a-t-il du sens pour vous ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Vécu professionnel", echelle: "Sens du travail" },
    { text: "Avez-vous le sentiment que le travail que vous faites est important ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Vécu professionnel", echelle: "Sens du travail" },
    { text: "Recommanderiez-vous à un ami proche de postuler sur un emploi dans votre entreprise ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Vécu professionnel", echelle: "Engagement dans l'entreprise" },
    { text: "Pensez-vous que votre entreprise est d'une grande importance pour vous ?", options: ["Dans une très faible mesure", "Dans une faible mesure", "Plus ou moins", "Dans une grande mesure", "Dans une très grande mesure"], domaine: "Vécu professionnel", echelle: "Engagement dans l'entreprise" },
    { text: "À quel point êtes-vous satisfait(e) de votre travail dans son ensemble, en prenant en considération tous les aspects ?", options: ["Très insatisfait(e)", "Insatisfait(e)", "Satisfait(e)", "Très satisfait(e)"], domaine: "Vécu professionnel", echelle: "Satisfaction au travail" }
];
let displayedQuestions = [];
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function updateActionButtons() {
    const saveButton = document.getElementById('saveButton');
    if (saveButton) {
        saveButton.disabled = !isFormComplete();
    }
}
function isFormComplete() {
    const form = document.getElementById('copsocForm');
    if (!form) {
        return false;
    }
    return form.checkValidity();
}
function generateForm() {
    const form = document.getElementById('copsocForm');
    form.innerHTML = '';
    displayedQuestions = shuffle([...questions]);
    displayedQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        const label = document.createElement('label');
        label.className = 'question-label';
        label.textContent = `${index + 1}. ${q.text}`;
        questionDiv.appendChild(label);
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';
        q.options.forEach((option, i) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `q${index}`;
            radio.value = i;
            radio.required = true;
            const optionLabel = document.createElement('label');
            optionLabel.textContent = option;
            optionDiv.appendChild(radio);
            optionDiv.appendChild(optionLabel);
            optionsDiv.appendChild(optionDiv);
        });
        questionDiv.appendChild(optionsDiv);
        form.appendChild(questionDiv);
    });
    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.id = 'submitButton';
    submitButton.textContent = 'Soumettre le questionnaire';
    submitButton.onclick = submitForm;
    form.appendChild(submitButton);
    form.addEventListener('change', updateActionButtons);
    updateActionButtons();
}
function collectCurrentAnswers() {
    const form = document.getElementById('copsocForm');
    const formData = new FormData(form);
    const answers = [];
    for (let i = 0; i < displayedQuestions.length; i++) {
        const answerIndex = formData.get(`q${i}`);
        if (answerIndex === null) {
            return null;
        }
        const q = displayedQuestions[i];
        const numericIndex = parseInt(answerIndex, 10);
        if (Number.isNaN(numericIndex) || numericIndex < 0 || numericIndex >= q.options.length) {
            return null;
        }
        answers.push({
            questionText: q.text,
            answerIndex: numericIndex
        });
    }
    return answers;
}
function saveFormToFile() {
    if (!isFormComplete()) {
        alert('Veuillez répondre à toutes les questions avant de sauvegarder le formulaire.');
        return;
    }
    const answers = collectCurrentAnswers();
    if (!answers) {
        alert('Le formulaire est incomplet.');
        return;
    }
    const payload = {
        version: 1,
        savedAt: new Date().toISOString(),
        answers: answers
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'questionnaire-copsoq-sauvegarde.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}
function normalizeSavedAnswers(savedAnswers) {
    return savedAnswers.map(item => {
        const matchingQuestion = questions.find(question => question.text === item.questionText);
        if (!matchingQuestion) {
            return null;
        }
        return {
            ...item,
            answerIndex: parseInt(item.answerIndex, 10),
            domaine: matchingQuestion.domaine,
            echelle: matchingQuestion.echelle,
            options: matchingQuestion.options,
            question: matchingQuestion.text,
            answer: matchingQuestion.options[parseInt(item.answerIndex, 10)]
        };
    }).filter(Boolean);
}
function validateSavedPayload(parsed, fileName) {
    if (!parsed || !Array.isArray(parsed.answers)) {
        throw new Error(`Le fichier ${fileName} ne contient pas de données de formulaire valides.`);
    }
    const expectedQuestionTexts = questions.map(question => question.text);
    const loadedQuestionTexts = parsed.answers.map(item => item.questionText);
    if (parsed.answers.length !== questions.length) {
        throw new Error(`Le fichier ${fileName} contient ${parsed.answers.length} réponses alors que le questionnaire en attend ${questions.length}.`);
    }
    const duplicates = loadedQuestionTexts.filter((text, index) => loadedQuestionTexts.indexOf(text) !== index);
    if (duplicates.length > 0) {
        throw new Error(`Le fichier ${fileName} contient des réponses dupliquées pour une même question.`);
    }
    const missingQuestions = expectedQuestionTexts.filter(text => !loadedQuestionTexts.includes(text));
    if (missingQuestions.length > 0) {
        throw new Error(`Le fichier ${fileName} ne contient pas toutes les réponses attendues pour ce questionnaire.`);
    }
    const invalidEntries = parsed.answers.filter(item => {
        if (typeof item.questionText !== 'string' || !Number.isInteger(item.answerIndex)) {
            return true;
        }
        const matchingQuestion = questions.find(question => question.text === item.questionText);
        if (!matchingQuestion) {
            return true;
        }
        return item.answerIndex < 0 || item.answerIndex >= matchingQuestion.options.length;
    });
    if (invalidEntries.length > 0) {
        throw new Error(`Le fichier ${fileName} contient une ou plusieurs réponses invalides.`);
    }
    return normalizeSavedAnswers(parsed.answers);
}
function readSavedFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function () {
            try {
                const parsed = JSON.parse(reader.result);
                resolve(validateSavedPayload(parsed, file.name));
            } catch (error) {
                reject(error);
            }
        };
        reader.onerror = function () {
            reject(new Error(`Impossible de lire le fichier ${file.name}.`));
        };
        reader.readAsText(file);
    });
}
async function loadSingleFormFile(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) {
        return;
    }
    try {
        const data = await readSavedFile(file);
        displayLoadedSingleFileResults(data);
        document.getElementById('copsocForm').style.display = 'none';
        document.getElementById('submitButton').style.display = 'none';
        document.getElementById('resultsSection').style.display = 'block';
        alert('Sauvegarde chargée avec succès.');
    } catch (error) {
        alert(error.message || 'Impossible de charger la sauvegarde.');
    } finally {
        event.target.value = '';
    }
}
async function loadMultipleFormFiles(event) {
    const files = Array.from(event.target.files || []);
    if (files.length === 0) {
        return;
    }
    try {
        const loadedFiles = [];
        for (const file of files) {
            loadedFiles.push(await readSavedFile(file));
        }
        if (loadedFiles.length === 0) {
            throw new Error('Aucune sauvegarde valide n\'a pu être chargée.');
        }
        renderLoadedFilesSummary(loadedFiles);
        document.getElementById('copsocForm').style.display = 'none';
        document.getElementById('submitButton').style.display = 'none';
        document.getElementById('resultsSection').style.display = 'block';
        alert(`Chargement réussi de ${loadedFiles.length} sauvegarde(s).`);
    } catch (error) {
        alert(error.message || 'Impossible de charger les sauvegardes.');
    } finally {
        event.target.value = '';
    }
}
function getScoreForAnswer(item, answerIndex) {
    const totalOptions = item.options.length;
    if (totalOptions <= 1) {
        return 0;
    }
    return Math.round(((answerIndex + 1) / totalOptions) * 100);
}
function getScoreColor(score) {
    if (score < 40) {
        return '#e74c3c';
    }
    if (score < 60) {
        return '#f39c12';
    }
    if (score < 80) {
        return '#f1c40f';
    }
    return '#2ecc71';
}
function calculateMean(values) {
    if (!values.length) {
        return 0;
    }
    return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}
function calculateMedian(values) {
    if (!values.length) {
        return 0;
    }
    const sorted = [...values].sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
        return Math.round((sorted[middle - 1] + sorted[middle]) / 2);
    }
    return Math.round(sorted[middle]);
}
function calculateMin(values) {
    if (!values.length) {
        return 0;
    }
    return Math.min(...values);
}
function calculateMax(values) {
    if (!values.length) {
        return 0;
    }
    return Math.max(...values);
}
function buildDomainSummary(answers) {
    const groupedByDomaine = {};
    answers.forEach(answer => {
        if (!groupedByDomaine[answer.domaine]) {
            groupedByDomaine[answer.domaine] = {};
        }
        if (!groupedByDomaine[answer.domaine][answer.echelle]) {
            groupedByDomaine[answer.domaine][answer.echelle] = [];
        }
        groupedByDomaine[answer.domaine][answer.echelle].push(answer);
    });
    const domainScores = {};
    const scaleStatsByDomain = {};
    for (const domaine in groupedByDomaine) {
        const scaleStats = {};
        const scaleScores = Object.keys(groupedByDomaine[domaine]).map(echelle => {
            const items = groupedByDomaine[domaine][echelle];
            const total = items.reduce((sum, item) => sum + getScoreForAnswer(item, item.answerIndex), 0);
            const average = Math.round(total / items.length);
            scaleStats[echelle] = average;
            return average;
        });
        domainScores[domaine] = {
            total: scaleScores.reduce((sum, value) => sum + value, 0),
            count: scaleScores.length
        };
        scaleStatsByDomain[domaine] = scaleStats;
    }
    return { groupedByDomaine, domainScores, scaleStatsByDomain };
}
function renderScaleIndicator(titleElement, echelle, score) {
    const bullet = document.createElement('span');
    bullet.className = 'scale-bullet';
    bullet.style.backgroundColor = getScoreColor(score);

    const label = document.createElement('span');
    label.textContent = `${echelle}`;
    //label.textContent = `${echelle} — ${score}%`;

    titleElement.textContent = '';
    titleElement.appendChild(bullet);
    titleElement.appendChild(label);
}
function displayLoadedSingleFileResults(data) {
    const resultsContent = document.getElementById('resultsContent');
    resultsContent.innerHTML = '';
    const groupedByDomaine = {};
    data.forEach(item => {
        if (!groupedByDomaine[item.domaine]) {
            groupedByDomaine[item.domaine] = {};
        }
        if (!groupedByDomaine[item.domaine][item.echelle]) {
            groupedByDomaine[item.domaine][item.echelle] = [];
        }
        groupedByDomaine[item.domaine][item.echelle].push(item);
    });
    const domainScores = {};
    for (const domaine in groupedByDomaine) {
        const domaineDiv = document.createElement('div');
        domaineDiv.className = 'domaine';
        const domaineTitle = document.createElement('div');
        domaineTitle.className = 'domaine-title';
        domaineTitle.textContent = domaine;
        domaineDiv.appendChild(domaineTitle);
        for (const echelle in groupedByDomaine[domaine]) {
            const echelleDiv = document.createElement('div');
            echelleDiv.className = 'echelle';
            const echelleTitle = document.createElement('div');
            echelleTitle.className = 'echelle-title';
            echelleTitle.textContent = echelle;
            echelleDiv.appendChild(echelleTitle);

            const items = groupedByDomaine[domaine][echelle];
            const total = items.reduce((sum, item) => sum + getScoreForAnswer(item, item.answerIndex), 0);
            const score = Math.round(total / items.length);
            renderScaleIndicator(echelleTitle, echelle, score);

            items.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'result-item';
                const questionSpan = document.createElement('div');
                questionSpan.className = 'result-question';
                questionSpan.textContent = item.question;
                const answerSpan = document.createElement('div');
                answerSpan.className = 'result-answer';
                answerSpan.textContent = `Réponse: ${item.answer}`;
                itemDiv.appendChild(questionSpan);
                itemDiv.appendChild(answerSpan);
                echelleDiv.appendChild(itemDiv);
            });
            domaineDiv.appendChild(echelleDiv);
        }
        resultsContent.appendChild(domaineDiv);
        const scaleScores = Object.keys(groupedByDomaine[domaine]).map(echelle => {
            const items = groupedByDomaine[domaine][echelle];
            const total = items.reduce((sum, item) => sum + getScoreForAnswer(item, item.answerIndex), 0);
            return Math.round(total / items.length);
        });
        domainScores[domaine] = {
            total: scaleScores.reduce((sum, value) => sum + value, 0),
            count: scaleScores.length
        };
    }
    renderOverallChart(domainScores);
}
function renderLoadedFilesSummary(loadedFiles) {
    const resultsContent = document.getElementById('resultsContent');
    resultsContent.innerHTML = '';
    const scaleValuesByDomain = {};
    const allDomains = new Set();
    const datasets = [];
    loadedFiles.forEach((fileAnswers, fileIndex) => {
        const summary = buildDomainSummary(fileAnswers);
        const labels = Object.keys(summary.domainScores);
        labels.forEach(domain => allDomains.add(domain));
        const data = labels.map(domain => {
            const score = summary.domainScores[domain];
            return score ? Math.round(score.total / score.count) : 0;
        });
        const pointColors = data.map(score => getScoreColor(score));
        datasets.push({
            label: `Sauvegarde ${fileIndex + 1}`,
            data: data,
            fill: false,
            backgroundColor: pointColors.map(color => `${color}40`),
            borderColor: pointColors,
            pointBackgroundColor: pointColors,
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: pointColors,
            pointHoverBorderColor: '#fff'
        });
        for (const domaine in summary.domainScores) {
            if (!scaleValuesByDomain[domaine]) {
                scaleValuesByDomain[domaine] = {};
            }
            for (const echelle in summary.scaleStatsByDomain[domaine]) {
                if (!scaleValuesByDomain[domaine][echelle]) {
                    scaleValuesByDomain[domaine][echelle] = [];
                }
                scaleValuesByDomain[domaine][echelle].push(summary.scaleStatsByDomain[domaine][echelle]);
            }
        }
    });
    const labels = Array.from(allDomains);
    renderOverallChart(labels, datasets);
    const summaryTitle = document.createElement('h3');
    summaryTitle.textContent = 'Statistiques agrégées des sauvegardes chargées';
    summaryTitle.style.marginTop = '20px';
    resultsContent.appendChild(summaryTitle);
    for (const domaine in scaleValuesByDomain) {
        const domainCard = document.createElement('div');
        domainCard.className = 'domaine';
        const domainTitle = document.createElement('div');
        domainTitle.className = 'domaine-title';
        domainTitle.textContent = domaine;
        domainCard.appendChild(domainTitle);
        const table = document.createElement('table');
        table.className = 'summary-table';
        table.innerHTML = '<thead><tr><th>Échelle</th><th>Moyenne</th><th>Médiane</th><th>Minimum</th><th>Maximum</th></tr></thead>';
        const tbody = document.createElement('tbody');
        for (const echelle in scaleValuesByDomain[domaine]) {
            const row = document.createElement('tr');
            const values = scaleValuesByDomain[domaine][echelle];
            const meanValue = calculateMean(values);
            const medianValue = calculateMedian(values);
            const minValue = calculateMin(values);
            const maxValue = calculateMax(values);
            const echelleCell = document.createElement('td');
            echelleCell.textContent = echelle;
            row.appendChild(echelleCell);
            [meanValue, medianValue, minValue, maxValue].forEach(value => {
                const statCell = document.createElement('td');
                //statCell.textContent = `${value}%`;
                statCell.style.backgroundColor = getScoreColor(value);
                statCell.style.color = '#fff';
                statCell.style.fontWeight = '600';
                row.appendChild(statCell);
            });
            tbody.appendChild(row);
        }
        table.appendChild(tbody);
        domainCard.appendChild(table);
        resultsContent.appendChild(domainCard);
    }
}
function renderOverallChart(labelsOrDomainScores, datasets) {
    const overallChartContainer = document.getElementById('overallChartContainer');
    overallChartContainer.style.display = 'block';
    let labels;
    let chartDatasets;
    if (Array.isArray(labelsOrDomainScores) && Array.isArray(datasets)) {
        labels = labelsOrDomainScores;
        chartDatasets = datasets;
    } else {
        const domainScores = labelsOrDomainScores;
        labels = Object.keys(domainScores);
        const data = labels.map(label => Math.round(domainScores[label].total / domainScores[label].count));
        const pointColors = data.map(score => getScoreColor(score));
        chartDatasets = [{
            label: '',
            data: data,
            fill: false,
            backgroundColor: pointColors.map(color => `${color}40`),
            borderColor: pointColors,
            pointBackgroundColor: pointColors,
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: pointColors,
            pointHoverBorderColor: '#fff'
        }];
    }
    const ctx = document.getElementById('overallChart');
    if (window.overallChart && typeof window.overallChart.destroy === 'function') {
        window.overallChart.destroy();
    }
    window.overallChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: chartDatasets
        },
        options: {
            responsive: true,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20,
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                labels: {
                    font: {
                        size: 20
                    }
                }
            },
            elements: {
                point: {
                    pointRadius: 5,
                    pointStyle: 'circle'
                }
            }
        }
    });
}
function displayResults() {
    const resultsContent = document.getElementById('resultsContent');
    resultsContent.innerHTML = '';
    const form = document.getElementById('copsocForm');
    const formData = new FormData(form);
    const answers = [];
    for (let i = 0; i < displayedQuestions.length; i++) {
        const answerIndex = formData.get(`q${i}`);
        if (answerIndex !== null) {
            const q = displayedQuestions[i];
            const numericIndex = parseInt(answerIndex, 10);
            answers.push({
                question: q.text,
                answer: q.options[numericIndex],
                answerIndex: numericIndex,
                domaine: q.domaine,
                echelle: q.echelle,
                options: q.options
            });
        }
    }
    const groupedByDomaine = {};
    answers.forEach(a => {
        if (!groupedByDomaine[a.domaine]) {
            groupedByDomaine[a.domaine] = {};
        }
        if (!groupedByDomaine[a.domaine][a.echelle]) {
            groupedByDomaine[a.domaine][a.echelle] = [];
        }
        groupedByDomaine[a.domaine][a.echelle].push(a);
    });
    const domainScores = {};
    for (const domaine in groupedByDomaine) {
        const domaineDiv = document.createElement('div');
        domaineDiv.className = 'domaine';
        const domaineTitle = document.createElement('div');
        domaineTitle.className = 'domaine-title';
        domaineTitle.textContent = domaine;
        domaineDiv.appendChild(domaineTitle);
        for (const echelle in groupedByDomaine[domaine]) {
            const echelleDiv = document.createElement('div');
            echelleDiv.className = 'echelle';
            const echelleTitle = document.createElement('div');
            echelleTitle.className = 'echelle-title';
            echelleTitle.textContent = echelle;
            echelleDiv.appendChild(echelleTitle);
            const items = groupedByDomaine[domaine][echelle];
            const total = items.reduce((sum, item) => sum + getScoreForAnswer(item, item.answerIndex), 0);
            const score = Math.round(total / items.length);
            renderScaleIndicator(echelleTitle, echelle, score);
            items.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'result-item';
                const questionSpan = document.createElement('div');
                questionSpan.className = 'result-question';
                questionSpan.textContent = item.question;
                const answerSpan = document.createElement('div');
                answerSpan.className = 'result-answer';
                answerSpan.textContent = `Réponse: ${item.answer}`;
                itemDiv.appendChild(questionSpan);
                itemDiv.appendChild(answerSpan);
                echelleDiv.appendChild(itemDiv);
            });
            domaineDiv.appendChild(echelleDiv);
        }
        resultsContent.appendChild(domaineDiv);
        const scaleScores = Object.keys(groupedByDomaine[domaine]).map(echelle => {
            const items = groupedByDomaine[domaine][echelle];
            const total = items.reduce((sum, item) => sum + getScoreForAnswer(item, item.answerIndex), 0);
            return Math.round(total / items.length);
        });
        domainScores[domaine] = {
            total: scaleScores.reduce((sum, value) => sum + value, 0),
            count: scaleScores.length
        };
    }
    renderOverallChart(domainScores);
    document.getElementById('copsocForm').style.display = 'none';
    document.getElementById('submitButton').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'block';
}
function submitForm() {
    const form = document.getElementById('copsocForm');
    if (form.checkValidity()) {
        displayResults();
    } else {
        alert('Veuillez répondre à toutes les questions avant de soumettre.');
    }
}
window.onload = generateForm;