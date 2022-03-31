pipeline{
    agent any

    stages {
        stage("build"){
            steps{
                dir("build"){
                    bat 'npm install'
                    bat 'npm run build'
                }
            }
        }

        stage("test"){
            steps{
                dir("ProyectoFase3"){
                    bat 'npm test'
                }
            }
        }

        stage("Upload Image"){
            steps{
                dir("ProyectoFase3"){
                    bat 'docker login -u "bitochepe" -p "Zar45sGu:a7Vf2U"'
                    bat 'docker build -t bitochepe/dev .'
                    bat 'docker push bitochepe/dev'
                }
            }
        }

        stage("Deploy Ansible"){
            steps{
                dir("ProyectoFase3"){
                    bat 'wsl ansible-playbook playbook-production.yml'
                }
            }
        }
    }
}
