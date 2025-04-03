pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/shivamBhavsar-cmd/SSH_Cloud_Monitoring_Dashboard.git'
            }
        }

        stage('Run SSH Attack Detection') {
            steps {
                script {
                    sh 'mkdir -p output'  // Ensure output directory exists
                    def ssh_result = sh(script: "python3 ssh_attack_detection.py", returnStdout: true).trim()
                    writeFile file: 'ssh_result.txt', text: ssh_result
                }
            }
        }

        stage('Run DDoS Attack Detection') {
            steps {
                script {
                    sh 'mkdir -p output'  // Ensure output directory exists
                    def ddos_result = sh(script: "python3 ddos_attack_detection.py", returnStdout: true).trim()
                    writeFile file: 'ddos_result.txt', text: ddos_result
                }
            }
        }

        stage('Archive Results') {
            steps {
                archiveArtifacts artifacts: 'ssh_result.txt, ddos_result.txt, output/*.png', fingerprint: true
            }
        }
    }
}
