# Setup
default_registry('docker.io/robjkc')
allow_k8s_contexts(k8s_context())

#repo = local_git_repo('.')

k8s_yaml('tilt/kubernetes.yaml')

# Start with a base Dockerfile with none of our source code,
# and an entry point that starts a server.

docker_build('react-hello-image', '.',
  live_update=[
    # when package.json changes, we need to do a full build
    fall_back_on(['package.json', 'package-lock.json']),
    # Map the local source code into the container under /src
    sync('.', '/src'),
  ])

#k8s_resource('react-hello', port_forwards='8090:3000',
#    resource_deps=['deploy']
#)
k8s_resource('react-hello', port_forwards=3000)
