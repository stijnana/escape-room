// --- Vault Utility Script ---

function initializeSystem() {
    log("Initializing recovery system...");
    checkStatus();
}

function checkStatus() {
    return true; // always OK for now
}

function log(message) {
    console.log("[Vault]", message);
}

// --- Fragment logic hidden in plain sight ---

function collectFragmentD() {
    const a = ColingProcess();
    const b = Faultlocking();
    return a + b;
}



function buildPart(arr) {
    return arr.join('');
}

// --- UI logic ---

function checkKey() {
    const val = document.getElementById('keyInput').value;
    const qr = document.getElementById('qr');

    if (val === '12345') {

        qr.style.display = 'block';

        setTimeout(() => {
            qr.style.opacity = '1';
        }, 100);

        alert('Vertel dat je het hebt opgelost');
    } else {
        alert('Vertel dat je het hebt opgelost');
    }
}
function ColingProcess() {
    return buildPart(["63","46","38","30"]);
}

function revealQR() {
    const qr = document.getElementById('qr');
    qr.style.display = 'block';

    setTimeout(() => {
        qr.style.opacity = '1';
    }, 100);

    alert('✅ Vault unlocked');
}


const VaultSystem = {
    initialized: false,

    init: function () {
        this.log("Initializing vault system...");
        this.initialized = true;
    },

    log: function (message) {
        console.log("[Vault]", message);
    },

    validateInput: function (input) {
        return input && input.length > 5;
    }
};

// -------------------------------
// Diagnostics (looks important 👀)
// -------------------------------

function runDiagnostics() {
    VaultSystem.log("Running diagnostics...");

    if (!VaultSystem.initialized) {
        VaultSystem.log("System not initialized");
    }

    return checkSubsystems();
}

function checkSubsystems() {
    return true;
}


function Faultlocking() {
    return buildPart(["4d","67","3d","3d"]);
}