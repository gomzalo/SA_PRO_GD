pipeline{
    agent any

    stages {
        stage("build"){
            steps{
                dir("SoccerStats"){
                    sh 'cd ./backend/administrative'
                    sh 'docker login -u bitochepe -p a596b343-ee91-47c8-a5c3-f49d76f8982c'
                    sh 'docker build -t bitochepe/administrative-image-sa'
                    sh 'docker push bitochepe/administrative-image-sa'
                }
            }
        }

        stage("test"){
            steps{
                dir("SoccerStats"){
                    sh 'npm test'
                }
            }
        }

        stage("Upload Images"){
            steps{
                dir("SoccerStats"){
                    sh 'docker login -u "bitochepe" -p "a596b343-ee91-47c8-a5c3-f49d76f8982c"'
                    sh 'docker build -t bitochepe/pareja4:v1 .'
                    sh 'docker push bitochepe/pareja4:v1'
                }
            }
        }

        stage("Deploy Ansible"){
            steps{
                dir("SoccerStats"){
                    sh 'ansible-playbook ansible-production.yml'
                }
            }
        }
    }
}
