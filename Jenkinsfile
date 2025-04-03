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
                    def ssh_result = sh(script: "python3 ssh_attack_detection.py", returnStdout: true).trim()
                    echo ssh_result
                }
            }
        }

        stage('Run DDoS Attack Detection') {
            steps {
                script {
                    def ddos_result = sh(script: "python3 ddos_attack_detection.py", returnStdout: true).trim()
                    echo ddos_result
                }
            }
        }

        stage('Archive Results') {
            steps {
                archiveArtifacts artifacts: 'output/ssh_result.txt, output/ddos_result.txt, output/ssh_attack_distribution.png, output/ddos_attack_distribution.png', fingerprint: true
            }
        }
    }
}
