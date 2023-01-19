# Setup
default_registry('docker.io/robjkc')
allow_k8s_contexts(k8s_context())

k8s_yaml('tilt/kubernetes.yaml')
k8s_resource('react-hello', port_forwards='8090:80',
    resource_deps=['deploy']
)

docker_build('react-hello-image', '.')
