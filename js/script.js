/**
 * Gets blood pressure reading data
 * @param { integer } systolic
 * @param { integer } diastolic
 * @param { string } readingMethod
 * @returns { string[] }
 */
function getBloodPressureReading(systolic, diastolic, readingMethod) {
    if (!verifyValues(systolic, diastolic)) {
        return null;
    }

    let circleColor = '';
    let readingText = '';
    let heartbeatSpeed = '';
    const readingValues = {
        home: {
            superHigh: {
                systolicMinimum: 170,
                diastolicMinimun: 100
            },
            high: {
                systolicMinimum: 135,
                diastolicMinimun: 85
            },
            medium: {
                systolicMinimum: 121,
                diastolicMinimun: 81
            },
            healthy: {
                systolicMinimum: 90,
                diastolicMinimun: 60
            }
        },
        clinic: {
            superHigh: {
                systolicMinimum: 180,
                diastolicMinimun: 120
            },
            high: {
                systolicMinimum: 140,
                diastolicMinimun: 90
            },
            medium: {
                systolicMinimum: 121,
                diastolicMinimun: 81
            },
            healthy: {
                systolicMininimum: 90,
                diastolicMinimun: 60
            }
        }
    }
    const readingValue = readingValues[readingMethod];
    if (systolic >= readingValue.superHigh.systolicMinimum || diastolic >= readingValue.superHigh.diastolicMinimum) {
        circleColor = '#880808';
        readingText = 'REALLY HIGH! CALL 999!';
        heartbeatSpeed = 0.2;
    } else if (systolic >= readingValue.high.systolicMinimum || diastolic >= readingValue.high.diastolicMinimum) {
        circleColor = '#DC143C';
        readingText = 'HIGH!';
        heartbeatSpeed = 0.5;
    } else if (systolic >= readingValue.medium.systolicMinimum || diastolic >= readingValue.medium.diastolicMinimum) {
        circleColor = '#CC5500';
        readingText = 'Slightly raised';
        heartbeatSpeed = 1;
    } else if (systolic >= readingValue.healthy.systolicMinimum || diastolic >= readingValue.healthy.diastolicMinimum) {
        circleColor = '#228B22';
        readingText = 'HEALTHY!';
        heartbeatSpeed = 2;
    } else {
        circleColor = 'purple';
        readingText = 'LOW!';
        heartbeatSpeed = 0.5;
    }
    return [
        `${systolic}/${diastolic}`,
        circleColor,
        readingText,
        `heartbeat-animation ${heartbeatSpeed}s infinite ease-in-out`
    ];
}

/**
 * Verifies input data values
 * @param { integer } systolic
 * @param { integer } diastolic
 * @param { string } readingMethod
 * @returns { boolean }
 */
function verifyValues(systolic, diastolic, readingMethod) {
    return !!(
        verifyInputReading(systolic, diastolic)
        && verifySystolicValues(systolic)
        && verifyDiastolicValues(diastolic)
    );
}

/**
 * Checks if input reading format is valid
 * @param { integer } systolic
 * @param { integer } diastolic
 * @returns { boolean }
 */
function verifyInputReading(systolic, diastolic) {
    if (isNaN(systolic) || isNaN(diastolic)) {
        alert('Please enter valid numbers.');
        return false;
    }
    if (diastolic > systolic) {
        alert('Diastolic reading should be lower than your systolic reading.');
        hideResults();
        return false;
    }
    return true;
}

/**
 * Checks if systolic value is valid
 * @param { integer } systolic
 * @returns { boolean }
 */
function verifySystolicValues(systolic) {
    const systolicMinimum = 70;
    const systolicMaximum = 300;
    if (systolic >= systolicMinimum && systolic <= systolicMaximum) {
        return true;
    }
    if (systolic < systolicMinimum) alert(`Systolic reading must be ${systolicMinimum} or above.`);
    if (systolic > systolicMaximum) alert(`Systolic reading must be ${systolicMaximum} or below.`);
    hideResults();
    return false;
}

/**
 * Checks if diastolic value is valid
 * @param { integer } diastolic
 * @returns { boolean }
 */
function verifyDiastolicValues(diastolic) {
    const diastolicMinimum = 40;
    const diastolicMaximum = 200;
    if (diastolic >= diastolicMinimum && diastolic <= diastolicMaximum) {
        return true;
    }
    if (diastolic < diastolicMinimum) alert(`Diastolic reading must be ${diastolicMinimum} or above.`);
    if (diastolic > diastolicMaximum) alert(`Diastolic reading must be ${diastolicMaximum} or below.`);
    hideResults();
    return false;
}

/**
 * Updates the UI with the reading result
 * @param { ?string[] } readingResult
 */
function updateUI(readingResult) {
    if (!readingResult) return;
    const [reading, circleColor, readingText, heartbeatSpeed] = readingResult;
    document.getElementById('bloodPressureCircle').style.borderColor = circleColor;
    document.getElementById('bloodPressureCircle').style.animation = heartbeatSpeed;
    document.getElementById('bloodPressureCircle').textContent = reading;
    document.getElementById('readingResult').style.color = circleColor;
    document.getElementById('readingResult').textContent = readingText;
    document.getElementById('result').classList.remove('hidden');
}

/**
 * Resets visuals and text inputs
 */
function resetUI() {
    document.getElementById('systolic').value = '';
    document.getElementById('diastolic').value = '';
    document.getElementById('readingMethod').selectedIndex = 0;
    hideResults();
}

/**
 * Hides results data
 */
function hideResults() {
    document.getElementById('result').classList.add('hidden');
}

/**
 * Event Listener for result button
 */
document.getElementById('getResult').addEventListener('click', function() {
    const systolic = parseInt(document.getElementById('systolic').value);
    const diastolic = parseInt(document.getElementById('diastolic').value);
    const readingMethod = document.getElementById('readingMethod').value;
    updateUI(getBloodPressureReading(systolic, diastolic, readingMethod));
});

/**
 * Event Listener for reset button
 */
document.getElementById('resetButton').addEventListener('click', function() {
    resetUI();
});