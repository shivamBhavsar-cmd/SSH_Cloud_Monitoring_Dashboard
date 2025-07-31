# Kubernetes Manifests for Cloud Monitoring Dashboard

This directory contains all the Kubernetes manifest files to deploy the Cloud Monitoring Dashboard application.

## Taints and Tolerations

The `deployment.yaml` includes a toleration to allow pods to be scheduled on nodes with a specific taint.

**Toleration in Deployment:**
```yaml
tolerations:
- key: "app"
  operator: "Equal"
  value: "monitoring"
  effect: "NoSchedule"
```

To make use of this toleration, you need to taint a node with the corresponding key-value pair. You can do this with the following `kubectl` command:

```bash
kubectl taint nodes <node-name> app=monitoring:NoSchedule
```

Replace `<node-name>` with the name of the node you want to taint. This will ensure that only pods with the matching toleration (like our application) can be scheduled on that node.
